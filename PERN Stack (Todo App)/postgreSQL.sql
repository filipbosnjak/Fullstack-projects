# in cli -> 
# psql -U postgres

# \l - lists databases

# CREATE DATABASE postgres;
# \c perntodo -> connects to a database

# \dt -> lists relations

CREATE DATABASE postgres;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);

SELECT * FROM todo; -> important! end the query with a semicolon

DELETE FROM todo -> clears the tab

TRUNCATE todo RESTART IDENTITY; clears table and resets serial

SELECT * FROM todo WHERE todo_id = id -> await pool.query(... todo_id = $1 , [req.body.description , req.params.id] )

UPDATE todo SET description = $1 WHERE todo_id = $2, [req.body.description, req.body.id]