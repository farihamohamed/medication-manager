import sqlite3

def get_db_connection():
    conn = sqlite3.connect('medication_manager.db')
    conn.row_factory = sqlite3.Row
    return conn



def init_db():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(
        '''
        CREATE TABLE IF NOT EXISTS users(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE,
            password TEXT,
            name TEXT,
            medications TEXT

        )
        '''
    )
    conn.commit()
    conn.close()

def add_user(username, password, name, medications):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(
        '''
        INSERT INTO users(username, password, name, medications)
        VALUES(?,?,?,?)
        ''', (username, password,name, ','.join(medications))
       
    )
    conn.commit()
    conn.close()
    


def get_user(username):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('SELECT *  FROM users WHERE username = ?', (username,))
    user = cursor.fetchone()
    conn.close()
    return user




