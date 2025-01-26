import { DatabaseSync } from 'node:sqlite'
import SqlBricks  from 'sql-bricks'

const dbase = new DatabaseSync('./db.sqlite')

function runSeed(items) {
    dbase.exec(
        'drop table if exists students'
    )

    dbase.exec(
        `create table students(
            id integer primary key autoincrement,
            name text not null,
            phone text not null
        ) strict`
    )
    insert('students', items)
}

export function insert(table, items) {
    const { text, values } = SqlBricks.insertInto(
        table, items
    ).toParams({placeholder: '?'})
    const insertStatement = dbase.prepare(text)
    insertStatement.run(...values)    
}

export function select(query) {
    
}

runSeed([
    {
        name: 'Fernando',
        phone: '6499854744'
    },
    {
        name: 'Maria',
        phone: '6494584744'
    },
    {
        name: 'Juaquim',
        phone: '6499444995'
    },
    {
        name: 'Francisco o Papa',
        phone: '64998774412'
    },
])