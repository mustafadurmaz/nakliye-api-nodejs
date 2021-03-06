PGDMP         %                y         	   nakliyedb    14.1    14.1                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16703 	   nakliyedb    DATABASE     f   CREATE DATABASE nakliyedb WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Turkish_Turkey.1254';
    DROP DATABASE nakliyedb;
                postgres    false            ?            1259    16705    devices_seq    SEQUENCE     t   CREATE SEQUENCE public.devices_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.devices_seq;
       public          postgres    false            ?            1259    16715    devices    TABLE       CREATE TABLE public.devices (
    id integer DEFAULT nextval('public.devices_seq'::regclass) NOT NULL,
    vehicle_id integer NOT NULL,
    device_type_id integer NOT NULL,
    device_name character varying(75),
    is_online boolean,
    is_active boolean
);
    DROP TABLE public.devices;
       public         heap    postgres    false    210            ?            1259    16706    devices_type_seq    SEQUENCE     y   CREATE SEQUENCE public.devices_type_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.devices_type_seq;
       public          postgres    false            ?            1259    16721    devices_type    TABLE     ?   CREATE TABLE public.devices_type (
    id integer DEFAULT nextval('public.devices_type_seq'::regclass) NOT NULL,
    type_name character varying(75),
    type_description character varying(255),
    is_active boolean
);
     DROP TABLE public.devices_type;
       public         heap    postgres    false    211            ?            1259    16708    log_location_seq    SEQUENCE     y   CREATE SEQUENCE public.log_location_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.log_location_seq;
       public          postgres    false            ?            1259    16815    log_location    TABLE     D  CREATE TABLE public.log_location (
    id integer DEFAULT nextval('public.log_location_seq'::regclass) NOT NULL,
    vehicle_id integer NOT NULL,
    device_id integer NOT NULL,
    latitude character varying(50),
    longtitude character varying(50),
    created_at timestamp without time zone DEFAULT LOCALTIMESTAMP(0)
);
     DROP TABLE public.log_location;
       public         heap    postgres    false    213            ?            1259    16707    log_temperature_seq    SEQUENCE     |   CREATE SEQUENCE public.log_temperature_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.log_temperature_seq;
       public          postgres    false            ?            1259    16805    log_temperature    TABLE     %  CREATE TABLE public.log_temperature (
    id integer DEFAULT nextval('public.log_temperature_seq'::regclass) NOT NULL,
    vehicle_id integer NOT NULL,
    device_id integer NOT NULL,
    read_data character varying(50),
    created_at timestamp without time zone DEFAULT LOCALTIMESTAMP(0)
);
 #   DROP TABLE public.log_temperature;
       public         heap    postgres    false    212            ?            1259    16704    vehicles_seq    SEQUENCE     u   CREATE SEQUENCE public.vehicles_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.vehicles_seq;
       public          postgres    false            ?            1259    16709    vehicles    TABLE     ?   CREATE TABLE public.vehicles (
    id integer DEFAULT nextval('public.vehicles_seq'::regclass) NOT NULL,
    vehicle_plate character varying(20),
    current_status integer,
    is_active boolean
);
    DROP TABLE public.vehicles;
       public         heap    postgres    false    209                      0    16715    devices 
   TABLE DATA           d   COPY public.devices (id, vehicle_id, device_type_id, device_name, is_online, is_active) FROM stdin;
    public          postgres    false    215   ?                 0    16721    devices_type 
   TABLE DATA           R   COPY public.devices_type (id, type_name, type_description, is_active) FROM stdin;
    public          postgres    false    216   p                  0    16815    log_location 
   TABLE DATA           c   COPY public.log_location (id, vehicle_id, device_id, latitude, longtitude, created_at) FROM stdin;
    public          postgres    false    218   ?                  0    16805    log_temperature 
   TABLE DATA           [   COPY public.log_temperature (id, vehicle_id, device_id, read_data, created_at) FROM stdin;
    public          postgres    false    217   N!                 0    16709    vehicles 
   TABLE DATA           P   COPY public.vehicles (id, vehicle_plate, current_status, is_active) FROM stdin;
    public          postgres    false    214   ?!                  0    0    devices_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.devices_seq', 9, true);
          public          postgres    false    210                       0    0    devices_type_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.devices_type_seq', 3, true);
          public          postgres    false    211                       0    0    log_location_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.log_location_seq', 4, true);
          public          postgres    false    213                       0    0    log_temperature_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.log_temperature_seq', 4, true);
          public          postgres    false    212                        0    0    vehicles_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.vehicles_seq', 11, true);
          public          postgres    false    209            z           2606    16720    devices dev_cons 
   CONSTRAINT     N   ALTER TABLE ONLY public.devices
    ADD CONSTRAINT dev_cons PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.devices DROP CONSTRAINT dev_cons;
       public            postgres    false    215            |           2606    16726    devices_type devtyp_cons 
   CONSTRAINT     V   ALTER TABLE ONLY public.devices_type
    ADD CONSTRAINT devtyp_cons PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.devices_type DROP CONSTRAINT devtyp_cons;
       public            postgres    false    216            ?           2606    16821    log_location logloc_cons 
   CONSTRAINT     V   ALTER TABLE ONLY public.log_location
    ADD CONSTRAINT logloc_cons PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.log_location DROP CONSTRAINT logloc_cons;
       public            postgres    false    218            ~           2606    16811    log_temperature logtemp_cons 
   CONSTRAINT     Z   ALTER TABLE ONLY public.log_temperature
    ADD CONSTRAINT logtemp_cons PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.log_temperature DROP CONSTRAINT logtemp_cons;
       public            postgres    false    217            x           2606    16714    vehicles veh_cons 
   CONSTRAINT     O   ALTER TABLE ONLY public.vehicles
    ADD CONSTRAINT veh_cons PRIMARY KEY (id);
 ;   ALTER TABLE ONLY public.vehicles DROP CONSTRAINT veh_cons;
       public            postgres    false    214               a   x?3?4?܂ԢĒҢT??Լ??"]C??.#???{@0??1?v]F`i?4?.???1??1X?(??0??9?	vi???	???=... S?<         b   x?3?I?-H-J,)-JUN?+?/??N,NT?<?<S????????#????J??s??jo+:????ˈ?= ??**?UH??I?,?DQ???? \?*/         \   x?e??AC?3T?a???֒??{?H?|?A ?8v?V?mWq?Љ????=S??Gw?h??j?[?۩?KI?m>?V??????k??         D   x?mɱ?@C?ڞ?????ҲC2????u~??֐??f?:*D????OFc"8??k'??M?         J   x?-?A? D?u{?
X??????aV?/????sq?????B?JU?F5???SoPoR?ms5?????l     