PGDMP                         z            todo    13.9 (Debian 13.9-1.pgdg110+1)    14.1     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16384    todo    DATABASE     X   CREATE DATABASE todo WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.utf8';
    DROP DATABASE todo;
                postgres    false            �            1259    16385    todos    TABLE     -   CREATE TABLE public.todos (
    todo text
);
    DROP TABLE public.todos;
       public         heap    postgres    false            �          0    16385    todos 
   TABLE DATA           %   COPY public.todos (todo) FROM stdin;
    public          postgres    false    200   �       �      x�+I-.Q(�O�W��SHI����� Qc&     