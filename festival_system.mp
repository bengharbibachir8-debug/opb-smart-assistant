# نظام الأعياد الصينية - OBP Smart Assistant
from flask import Flask, render_template, jsonify
import sqlite3
from datetime import datetime
import os

def create_festival_system(app):
    class FestivalSystem:
        def __init__(self):
            self.init_database()
        
        def init_database(self):
            if not os.path.exists('database'):
                os.makedirs('database')
                
            conn = sqlite3.connect('database/festivals.db')
            cursor = conn.cursor()
            
            cursor.execute('''
                CREATE TABLE IF NOT EXISTS festivals (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name_ar TEXT, name_zh TEXT, name_en TEXT,
                    date TEXT, description_ar TEXT, description_zh TEXT,
                    color TEXT, icon TEXT, days_before_alert INTEGER
                )
            ''')
            
            cursor.execute("SELECT COUNT(*) FROM festivals")
            if cursor.fetchone()[0] == 0:
                festivals = [
                    ('عيد الربيع', '春节', 'Spring Festival', '2024-02-10', 
                     'أهم عيد في الصين، رأس السنة القمرية الجديدة', 
                     '中国最重要的节日，农历新年', '#FF0000', '🎉', 7),
                    ('عيد الفوانيس', '元宵节', 'Lantern Festival', '2024-02-24',
                     'عيد الفوانيس ونهاية احتفالات رأس السنة',
                     '灯笼节，新年庆祝的结束', '#FFA500', '🏮', 3),
                    ('عيد تشينغمينغ', '清明节', 'Qingming Festival', '2024-04-04',
                     'عيد تنظيف القبور وتذكر الأسلاف',
                     '扫墓节，缅怀祖先', '#008000', '🌿', 5),
                    ('عيد قوارب التنين', '端午节', 'Dragon Boat Festival', '2024-06-10',
                     'سباق قوارب التنين وأكل الزونزي',
                     '龙舟竞赛，吃粽子', '#0000FF', '🐉', 7),
                    ('عيد منتصف الخريف', '中秋节', 'Mid-Autumn Festival', '2024-09-17',
                     'contemplation القمر وأكل كعك القمر',
                     '赏月，吃月饼', '#FFD700', '🌕', 7),
                    ('اليوم الوطني', '国庆节', 'National Day', '2024-10-01',
                     'ذكرى تأسيس جمهورية الصين الشعبية',
                     '中华人民共和国成立纪念日', '#FF0000', '🇨🇳', 14)
                ]
                
                cursor.executemany('''
                    INSERT INTO festivals VALUES 
                    (NULL, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                ''', festivals)
            
            conn.commit()
            conn.close()
        
        def get_upcoming_festivals(self, lang='ar'):
            conn = sqlite3.connect('database/festivals.db')
            cursor = conn.cursor()
            
            cursor.execute('SELECT * FROM festivals WHERE date >= date("now") ORDER BY date')
            festivals = cursor.fetchall()
            conn.close()
            
            result = []
            for fest in festivals:
                festival_date = datetime.strptime(fest[4], '%Y-%m-%d')
                days_until = (festival_date - datetime.now()).days
                
                result.append({
                    'id': fest[0],
                    'name': fest[0] if lang == 'ar' else fest[1] if lang == 'zh' else fest[2],
                    'date': fest[4],
                    'description': fest[5] if lang == 'ar' else fest[6],
                    'color': fest[7],
                    'icon': fest[8],
                    'days_until': days_until,
                    'is_today': days_until == 0,
                    'is_coming': days_until <= fest[9]
                })
            
            return result

    festival_system = FestivalSystem()

    @app.route('/festivals')
    def festivals_page():
        return render_template('festivals.html')

    @app.route('/api/festivals/<lang>')
    def get_festivals(lang):
        festivals = festival_system.get_upcoming_festivals(lang)
        return jsonify(festivals)

    @app.route('/api/current_festival/<lang>')
    def get_current_festival(lang):
        festivals = festival_system.get_upcoming_festivals(lang)
        current = next((f for f in festivals if f['is_coming']), festivals[0] if festivals else None)
        return jsonify(current or {})

    return festival_system

print("✅ نظام الأعياد الصينية جاهز للاستخدام!")
