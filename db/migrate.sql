-- Database: todo

-- DROP DATABASE IF EXISTS todo;

CREATE DATABASE todo
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'en_US.utf8'
    LC_CTYPE = 'en_US.utf8'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

-- DROP TABLE IF EXISTS public.todos;

CREATE TABLE IF NOT EXISTS public.todos
(
    todo text COLLATE pg_catalog."default"
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.todos
    OWNER to postgres;