FROM mysql:5.7

CMD [ "--innodb-use-native-aio=0" ]

COPY V001_create_table_people.sql /docker-entrypoint-initdb.d/
