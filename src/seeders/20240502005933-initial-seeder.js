'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      "email": "Tillman_Beier38@yahoo.com",
      "first_name": "Ricardo",
      "last_name": "Navarro",
      "birthday": "2022-03-15 00:00:00",
      "password": "Pruebas123456",
      "user_type": "user",
      "createdAt": "2024-05-02 00:13:07",
      "updatedAt": "2024-05-02 00:13:07"
    },
    {
      "email": "Elise59@hotmail.com",
      "first_name": "Ricardo",
      "last_name": "Navarro",
      "birthday": "2022-03-15 00:00:00",
      "password": "Pruebas123456",
      "user_type": "user",
      "createdAt": "2024-05-02 00:13:47",
      "updatedAt": "2024-05-02 00:13:47"
    },
    {
      "email": "Edison_Sanford@yahoo.com",
      "first_name": "Ricardo",
      "last_name": "Navarro",
      "birthday": "2022-03-15 00:00:00",
      "password": "Pruebas123456",
      "user_type": "user",
      "createdAt": "2024-05-02 00:13:49",
      "updatedAt": "2024-05-02 00:13:49"
    },
    {
      "email": "Gustave_Daniel@gmail.com",
      "first_name": "Ricardo",
      "last_name": "Navarro",
      "birthday": "2022-03-15 00:00:00",
      "password": "Pruebas123456",
      "user_type": "user",
      "createdAt": "2024-05-02 00:13:50",
      "updatedAt": "2024-05-02 00:13:50"
    },
    {
      "email": "Genevieve.Bauch@gmail.com",
      "first_name": "Ricardo",
      "last_name": "Navarro",
      "birthday": "2022-03-15 00:00:00",
      "password": "Pruebas123456",
      "user_type": "user",
      "createdAt": "2024-05-02 00:13:51",
      "updatedAt": "2024-05-02 00:13:51"
    },
    {
      "email": "Dorcas_White@gmail.com",
      "first_name": "Ricardo",
      "last_name": "Navarro",
      "birthday": "2022-03-15 00:00:00",
      "password": "Pruebas123456",
      "user_type": "user",
      "createdAt": "2024-05-02 00:13:52",
      "updatedAt": "2024-05-02 00:13:52"
    },
    {
      "email": "Leatha.Fay14@hotmail.com",
      "first_name": "Ricardo",
      "last_name": "Navarro",
      "birthday": "2022-03-15 00:00:00",
      "password": "Pruebas123456",
      "user_type": "user",
      "createdAt": "2024-05-02 00:13:53",
      "updatedAt": "2024-05-02 00:13:53"
    },
    {
      "email": "Judah.Brekke66@hotmail.com",
      "first_name": "Ricardo",
      "last_name": "Navarro",
      "birthday": "2022-03-15 00:00:00",
      "password": "Pruebas123456",
      "user_type": "user",
      "createdAt": "2024-05-02 00:13:53",
      "updatedAt": "2024-05-02 00:13:53"
    },
    {
      "email": "Marielle.Nikolaus@gmail.com",
      "first_name": "Ricardo",
      "last_name": "Navarro",
      "birthday": "2022-03-15 00:00:00",
      "password": "Pruebas123456",
      "user_type": "user",
      "createdAt": "2024-05-02 00:13:58",
      "updatedAt": "2024-05-02 00:13:58"
    },
    {
      "email": "Kelley.Douglas73@gmail.com",
      "first_name": "Ricardo",
      "last_name": "Navarro",
      "birthday": "2022-03-15 00:00:00",
      "password": "Pruebas123456",
      "user_type": "user",
      "createdAt": "2024-05-02 00:13:59",
      "updatedAt": "2024-05-02 00:13:59"
    },
    {
      "email": "Kenna39@gmail.com",
      "first_name": "Ricardo",
      "last_name": "Navarro",
      "birthday": "2022-03-15 00:00:00",
      "password": "Pruebas123456",
      "user_type": "user",
      "createdAt": "2024-05-02 00:13:59",
      "updatedAt": "2024-05-02 00:13:59"
    },
    {
      "email": "Brandon.Mosciski@gmail.com",
      "first_name": "Ricardo",
      "last_name": "Navarro",
      "birthday": "2022-03-15 00:00:00",
      "password": "Pruebas123456",
      "user_type": "user",
      "createdAt": "2024-05-02 00:14:00",
      "updatedAt": "2024-05-02 00:14:00"
    },
    {
      "email": "Janis84@gmail.com",
      "first_name": "Ricardo",
      "last_name": "Navarro",
      "birthday": "2022-03-15 00:00:00",
      "password": "Pruebas123456",
      "user_type": "user",
      "createdAt": "2024-05-02 00:14:01",
      "updatedAt": "2024-05-02 00:14:01"
    },
    {
      "email": "Donna.Torphy@gmail.com",
      "first_name": "Ricardo",
      "last_name": "Navarro",
      "birthday": "2022-03-15 00:00:00",
      "password": "Pruebas123456",
      "user_type": "user",
      "createdAt": "2024-05-02 00:14:01",
      "updatedAt": "2024-05-02 00:14:01"
    },
    {
      "email": "Bo_Bernhard@yahoo.com",
      "first_name": "Ricardo",
      "last_name": "Navarro",
      "birthday": "2022-03-15 00:00:00",
      "password": "Pruebas123456",
      "user_type": "user",
      "createdAt": "2024-05-02 00:14:01",
      "updatedAt": "2024-05-02 00:14:01"
    },
    {
      "email": "Asa_Rolfson@yahoo.com",
      "first_name": "Ricardo",
      "last_name": "Navarro",
      "birthday": "2022-03-15 00:00:00",
      "password": "Pruebas123456",
      "user_type": "user",
      "createdAt": "2024-05-02 00:14:02",
      "updatedAt": "2024-05-02 00:14:02"
    },
    {
      "email": "August.Leannon@yahoo.com",
      "first_name": "Ricardo",
      "last_name": "Navarro",
      "birthday": "2022-03-15 00:00:00",
      "password": "Pruebas123456",
      "user_type": "user",
      "createdAt": "2024-05-02 00:14:02",
      "updatedAt": "2024-05-02 00:14:02"
    },
    {
      "email": "Josefina_Pagac6@gmail.com",
      "first_name": "Ricardo",
      "last_name": "Navarro",
      "birthday": "2022-03-15 00:00:00",
      "password": "Pruebas123456",
      "user_type": "user",
      "createdAt": "2024-05-02 00:14:03",
      "updatedAt": "2024-05-02 00:14:03"
    },
    {
      "email": "Caleigh.Ernser52@gmail.com",
      "first_name": "Ricardo",
      "last_name": "Navarro",
      "birthday": "2022-03-15 00:00:00",
      "password": "Pruebas123456",
      "user_type": "user",
      "createdAt": "2024-05-02 00:14:03",
      "updatedAt": "2024-05-02 00:14:03"
    },
    {
      "email": "Caleb60@yahoo.com",
      "first_name": "Ricardo",
      "last_name": "Navarro",
      "birthday": "2022-03-15 00:00:00",
      "password": "Pruebas123456",
      "user_type": "user",
      "createdAt": "2024-05-02 00:14:04",
      "updatedAt": "2024-05-02 00:14:04"
    },
    {
      "email": "Camryn85@gmail.com",
      "first_name": "Ricardo",
      "last_name": "Navarro",
      "birthday": "2022-03-15 00:00:00",
      "password": "Pruebas123456",
      "user_type": "user",
      "createdAt": "2024-05-02 00:14:04",
      "updatedAt": "2024-05-02 00:14:04"
    },
    {
      "email": "Phyllis.Mueller@gmail.com",
      "first_name": "Ricardo",
      "last_name": "Navarro",
      "birthday": "2022-03-15 00:00:00",
      "password": "Pruebas123456",
      "user_type": "user",
      "createdAt": "2024-05-02 00:14:05",
      "updatedAt": "2024-05-02 00:14:05"
    },
    {
      "email": "Jalen4@gmail.com",
      "first_name": "Ricardo",
      "last_name": "Navarro",
      "birthday": "2022-03-15 00:00:00",
      "password": "Pruebas123456",
      "user_type": "user",
      "createdAt": "2024-05-02 00:14:06",
      "updatedAt": "2024-05-02 00:14:06"
    },
    {
      "email": "Brad.Lesch13@hotmail.com",
      "first_name": "Ricardo",
      "last_name": "Navarro",
      "birthday": "2022-03-15 00:00:00",
      "password": "Pruebas123456",
      "user_type": "user",
      "createdAt": "2024-05-02 00:14:06",
      "updatedAt": "2024-05-02 00:14:06"
    },
    {
      "email": "Tad85@gmail.com",
      "first_name": "Ricardo",
      "last_name": "Navarro",
      "birthday": "2022-03-15 00:00:00",
      "password": "Pruebas123456",
      "user_type": "user",
      "createdAt": "2024-05-02 00:14:07",
      "updatedAt": "2024-05-02 00:14:07"
    },
    {
      "email": "Mellie.Lemke@yahoo.com",
      "first_name": "Ricardo",
      "last_name": "Navarro",
      "birthday": "2022-03-15 00:00:00",
      "password": "Pruebas123456",
      "user_type": "user",
      "createdAt": "2024-05-02 00:14:07",
      "updatedAt": "2024-05-02 00:14:07"
    },
    {
      "email": "Etha_Steuber31@hotmail.com",
      "first_name": "Ricardo",
      "last_name": "Navarro",
      "birthday": "2022-03-15 00:00:00",
      "password": "Pruebas123456",
      "user_type": "user",
      "createdAt": "2024-05-02 00:14:08",
      "updatedAt": "2024-05-02 00:14:08"
    },
    {
      "email": "Casimir50@yahoo.com",
      "first_name": "Ricardo",
      "last_name": "Navarro",
      "birthday": "2022-03-15 00:00:00",
      "password": "Pruebas123456",
      "user_type": "user",
      "createdAt": "2024-05-02 00:14:08",
      "updatedAt": "2024-05-02 00:14:08"
    },
    {
      "email": "Adelia97@gmail.com",
      "first_name": "Ricardo",
      "last_name": "Navarro",
      "birthday": "2022-03-15 00:00:00",
      "password": "Pruebas123456",
      "user_type": "user",
      "createdAt": "2024-05-02 00:14:09",
      "updatedAt": "2024-05-02 00:14:09"
    },
    {
      "email": "Ulises.Mayert55@hotmail.com",
      "first_name": "Ricardo",
      "last_name": "Navarro",
      "birthday": "2022-03-15 00:00:00",
      "password": "Pruebas123456",
      "user_type": "user",
      "createdAt": "2024-05-02 00:14:09",
      "updatedAt": "2024-05-02 00:14:09"
    },
    {
      "email": "Taryn_Turner42@hotmail.com",
      "first_name": "Ricardo",
      "last_name": "Navarro",
      "birthday": "2022-03-15 00:00:00",
      "password": "Pruebas123456",
      "user_type": "user",
      "createdAt": "2024-05-02 00:14:10",
      "updatedAt": "2024-05-02 00:14:10"
    },
    {
      "email": "Jacky_Barrows50@hotmail.com",
      "first_name": "Ricardo",
      "last_name": "Navarro",
      "birthday": "2022-03-15 00:00:00",
      "password": "Pruebas123456",
      "user_type": "user",
      "createdAt": "2024-05-02 00:14:10",
      "updatedAt": "2024-05-02 00:14:10"
    },
    {
      "email": "Carter_Renner@hotmail.com",
      "first_name": "Ricardo",
      "last_name": "Navarro",
      "birthday": "2022-03-15 00:00:00",
      "password": "Pruebas123456",
      "user_type": "user",
      "createdAt": "2024-05-02 00:14:11",
      "updatedAt": "2024-05-02 00:14:11"
    },
    {
      "email": "Shane21@hotmail.com",
      "first_name": "Ricardo",
      "last_name": "Navarro",
      "birthday": "2022-03-15 00:00:00",
      "password": "Pruebas123456",
      "user_type": "user",
      "createdAt": "2024-05-02 00:14:11",
      "updatedAt": "2024-05-02 00:14:11"
    },
    {
      "email": "Rosetta_Swift39@yahoo.com",
      "first_name": "Ricardo",
      "last_name": "Navarro",
      "birthday": "2022-03-15 00:00:00",
      "password": "Pruebas123456",
      "user_type": "user",
      "createdAt": "2024-05-02 00:14:11",
      "updatedAt": "2024-05-02 00:14:11"
    },
    {
      "email": "Tiara.Stokes@hotmail.com",
      "first_name": "Ricardo",
      "last_name": "Navarro",
      "birthday": "2022-03-15 00:00:00",
      "password": "Pruebas123456",
      "user_type": "user",
      "createdAt": "2024-05-02 00:14:12",
      "updatedAt": "2024-05-02 00:14:12"
    },
    {
      "email": "Rashawn.Wilkinson82@hotmail.com",
      "first_name": "Ricardo",
      "last_name": "Navarro",
      "birthday": "2022-03-15 00:00:00",
      "password": "Pruebas123456",
      "user_type": "user",
      "createdAt": "2024-05-02 00:14:12",
      "updatedAt": "2024-05-02 00:14:12"
    },
    {
      "email": "Russel_Wuckert74@yahoo.com",
      "first_name": "Ricardo",
      "last_name": "Navarro",
      "birthday": "2022-03-15 00:00:00",
      "password": "Pruebas123456",
      "user_type": "user",
      "createdAt": "2024-05-02 00:14:13",
      "updatedAt": "2024-05-02 00:14:13"
    },
    {
      "email": "Elfrieda.Rohan73@yahoo.com",
      "first_name": "Ricardo",
      "last_name": "Navarro",
      "birthday": "2022-03-15 00:00:00",
      "password": "Pruebas123456",
      "user_type": "user",
      "createdAt": "2024-05-02 00:14:13",
      "updatedAt": "2024-05-02 00:14:13"
    },
    {
      "email": "Dane_Waelchi42@yahoo.com",
      "first_name": "Ricardo",
      "last_name": "Navarro",
      "birthday": "2022-03-15 00:00:00",
      "password": "Pruebas123456",
      "user_type": "user",
      "createdAt": "2024-05-02 00:14:14",
      "updatedAt": "2024-05-02 00:14:14"
    },
    {
      "email": "Elise_Kub@hotmail.com",
      "first_name": "Ricardo",
      "last_name": "Navarro",
      "birthday": "2022-03-15 00:00:00",
      "password": "Pruebas123456",
      "user_type": "user",
      "createdAt": "2024-05-02 00:14:14",
      "updatedAt": "2024-05-02 00:14:14"
    },
    {
      "email": "Kavon93@hotmail.com",
      "first_name": "Ricardo",
      "last_name": "Navarro",
      "birthday": "2022-03-15 00:00:00",
      "password": "Pruebas123456",
      "user_type": "user",
      "createdAt": "2024-05-02 00:14:15",
      "updatedAt": "2024-05-02 00:14:15"
    },
    {
      "email": "Tia10@yahoo.com",
      "first_name": "Ricardo",
      "last_name": "Navarro",
      "birthday": "2022-03-15 00:00:00",
      "password": "Pruebas123456",
      "user_type": "user",
      "createdAt": "2024-05-02 00:14:15",
      "updatedAt": "2024-05-02 00:14:15"
    },
    {
      "email": "Brycen_Little15@gmail.com",
      "first_name": "Ricardo",
      "last_name": "Navarro",
      "birthday": "2022-03-15 00:00:00",
      "password": "Pruebas123456",
      "user_type": "user",
      "createdAt": "2024-05-02 00:14:16",
      "updatedAt": "2024-05-02 00:14:16"
    },
    {
      "email": "Yolanda_Conn@hotmail.com",
      "first_name": "Ricardo",
      "last_name": "Navarro",
      "birthday": "2022-03-15 00:00:00",
      "password": "Pruebas123456",
      "user_type": "user",
      "createdAt": "2024-05-02 00:14:16",
      "updatedAt": "2024-05-02 00:14:16"
    },
    {
      "email": "Reinhold.Bednar@gmail.com",
      "first_name": "Ricardo",
      "last_name": "Navarro",
      "birthday": "2022-03-15 00:00:00",
      "password": "Pruebas123456",
      "user_type": "user",
      "createdAt": "2024-05-02 00:14:16",
      "updatedAt": "2024-05-02 00:14:16"
    },
    {
      "email": "Richie_Mitchell@hotmail.com",
      "first_name": "Ricardo",
      "last_name": "Navarro",
      "birthday": "2022-03-15 00:00:00",
      "password": "Pruebas123456",
      "user_type": "user",
      "createdAt": "2024-05-02 00:14:17",
      "updatedAt": "2024-05-02 00:14:17"
    },
    {
      "email": "Emelia9@gmail.com",
      "first_name": "Ricardo",
      "last_name": "Navarro",
      "birthday": "2022-03-15 00:00:00",
      "password": "Pruebas123456",
      "user_type": "user",
      "createdAt": "2024-05-02 00:14:17",
      "updatedAt": "2024-05-02 00:14:17"
    },
    {
      "email": "Jayde.Daniel50@yahoo.com",
      "first_name": "Ricardo",
      "last_name": "Navarro",
      "birthday": "2022-03-15 00:00:00",
      "password": "Pruebas123456",
      "user_type": "user",
      "createdAt": "2024-05-02 00:14:18",
      "updatedAt": "2024-05-02 00:14:18"
    },
    {
      "email": "Mervin.Mayer15@yahoo.com",
      "first_name": "Ricardo",
      "last_name": "Navarro",
      "birthday": "2022-03-15 00:00:00",
      "password": "Pruebas123456",
      "user_type": "user",
      "createdAt": "2024-05-02 00:14:19",
      "updatedAt": "2024-05-02 00:14:19"
    },
    {
      "email": "Robyn36@yahoo.com",
      "first_name": "Ricardo",
      "last_name": "Navarro",
      "birthday": "2022-03-15 00:00:00",
      "password": "Pruebas123456",
      "user_type": "user",
      "createdAt": "2024-05-02 00:14:19",
      "updatedAt": "2024-05-02 00:14:19"
    },
    {
      "email": "Gust.Tremblay27@hotmail.com",
      "first_name": "Ricardo",
      "last_name": "Navarro",
      "birthday": "2022-03-15 00:00:00",
      "password": "Pruebas123456",
      "user_type": "user",
      "createdAt": "2024-05-02 00:14:20",
      "updatedAt": "2024-05-02 00:14:20"
    }
    ], {});
    await queryInterface.bulkInsert('events', [{
      "name": "Evento Tactics",
      "start_date": "2022-11-26 01:43:48",
      "end_date": "2022-11-26 02:43:48",
      "ubication": "Estadio Akron",
      "allowed_number": 5,
      "createdAt": "2024-05-02 00:14:39",
      "updatedAt": "2024-05-02 00:14:39"
    },
    {
      "name": "Evento Communications",
      "start_date": "2022-11-26 01:43:48",
      "end_date": "2022-11-26 02:43:48",
      "ubication": "Estadio Akron",
      "allowed_number": 5,
      "createdAt": "2024-05-02 00:14:40",
      "updatedAt": "2024-05-02 00:14:40"
    },
    {
      "name": "Evento Data",
      "start_date": "2022-11-26 01:43:48",
      "end_date": "2022-11-26 02:43:48",
      "ubication": "Estadio Akron",
      "allowed_number": 5,
      "createdAt": "2024-05-02 00:14:40",
      "updatedAt": "2024-05-02 00:14:40"
    },
    {
      "name": "Evento Identity",
      "start_date": "2022-11-26 01:43:48",
      "end_date": "2022-11-26 02:43:48",
      "ubication": "Estadio Akron",
      "allowed_number": 5,
      "createdAt": "2024-05-02 00:14:41",
      "updatedAt": "2024-05-02 00:14:41"
    },
    {
      "name": "Evento Usability",
      "start_date": "2022-11-26 01:43:48",
      "end_date": "2022-11-26 02:43:48",
      "ubication": "Estadio Akron",
      "allowed_number": 5,
      "createdAt": "2024-05-02 00:14:42",
      "updatedAt": "2024-05-02 00:14:42"
    },
    {
      "name": "Evento Communications",
      "start_date": "2022-11-26 01:43:48",
      "end_date": "2022-11-26 02:43:48",
      "ubication": "Estadio Akron",
      "allowed_number": 5,
      "createdAt": "2024-05-02 00:14:42",
      "updatedAt": "2024-05-02 00:14:42"
    },
    {
      "name": "Evento Program",
      "start_date": "2022-11-26 01:43:48",
      "end_date": "2022-11-26 02:43:48",
      "ubication": "Estadio Akron",
      "allowed_number": 5,
      "createdAt": "2024-05-02 00:14:43",
      "updatedAt": "2024-05-02 00:14:43"
    },
    {
      "name": "Evento Integration",
      "start_date": "2022-11-26 01:43:48",
      "end_date": "2022-11-26 02:43:48",
      "ubication": "Estadio Akron",
      "allowed_number": 5,
      "createdAt": "2024-05-02 00:14:44",
      "updatedAt": "2024-05-02 00:14:44"
    },
    {
      "name": "Evento Usability",
      "start_date": "2022-11-26 01:43:48",
      "end_date": "2022-11-26 02:43:48",
      "ubication": "Estadio Akron",
      "allowed_number": 5,
      "createdAt": "2024-05-02 00:14:44",
      "updatedAt": "2024-05-02 00:14:44"
    },
    {
      "name": "Evento Program",
      "start_date": "2022-11-26 01:43:48",
      "end_date": "2022-11-26 02:43:48",
      "ubication": "Estadio Akron",
      "allowed_number": 5,
      "createdAt": "2024-05-02 00:14:45",
      "updatedAt": "2024-05-02 00:14:45"
    },
    {
      "name": "Evento Data",
      "start_date": "2022-11-26 01:43:48",
      "end_date": "2022-11-26 02:43:48",
      "ubication": "Estadio Akron",
      "allowed_number": 5,
      "createdAt": "2024-05-02 00:14:46",
      "updatedAt": "2024-05-02 00:14:46"
    },
    {
      "name": "Evento Creative",
      "start_date": "2022-11-26 01:43:48",
      "end_date": "2022-11-26 02:43:48",
      "ubication": "Estadio Akron",
      "allowed_number": 5,
      "createdAt": "2024-05-02 00:14:46",
      "updatedAt": "2024-05-02 00:14:46"
    },
    {
      "name": "Evento Solutions",
      "start_date": "2022-11-26 01:43:48",
      "end_date": "2022-11-26 02:43:48",
      "ubication": "Estadio Akron",
      "allowed_number": 5,
      "createdAt": "2024-05-02 00:14:48",
      "updatedAt": "2024-05-02 00:14:48"
    },
    {
      "name": "Evento Marketing",
      "start_date": "2022-11-26 01:43:48",
      "end_date": "2022-11-26 02:43:48",
      "ubication": "Estadio Akron",
      "allowed_number": 5,
      "createdAt": "2024-05-02 00:14:49",
      "updatedAt": "2024-05-02 00:14:49"
    },
    {
      "name": "Evento Creative",
      "start_date": "2022-11-26 01:43:48",
      "end_date": "2022-11-26 02:43:48",
      "ubication": "Estadio Akron",
      "allowed_number": 5,
      "createdAt": "2024-05-02 00:14:50",
      "updatedAt": "2024-05-02 00:14:50"
    }
    ], {});
    await queryInterface.bulkInsert('courts', [{
      "place": "Cancha Lead Assurance Officer",
      "status": "A",
      "createdAt": "2024-05-02 00:28:13",
      "updatedAt": "2024-05-02 00:28:13"
    },
    {
      "place": "Cancha Product Group Engineer",
      "status": "A",
      "createdAt": "2024-05-02 00:28:17",
      "updatedAt": "2024-05-02 00:28:17"
    },
    {
      "place": "Cancha Internal Assurance Planner",
      "status": "A",
      "createdAt": "2024-05-02 00:28:18",
      "updatedAt": "2024-05-02 00:28:18"
    },
    {
      "place": "Cancha Corporate Accountability Consultant",
      "status": "A",
      "createdAt": "2024-05-02 00:28:19",
      "updatedAt": "2024-05-02 00:28:19"
    },
    {
      "place": "Cancha Human Marketing Executive",
      "status": "A",
      "createdAt": "2024-05-02 00:28:20",
      "updatedAt": "2024-05-02 00:28:20"
    },
    {
      "place": "Cancha Future Marketing Strategist",
      "status": "A",
      "createdAt": "2024-05-02 00:28:20",
      "updatedAt": "2024-05-02 00:28:20"
    },
    {
      "place": "Cancha National Brand Officer",
      "status": "A",
      "createdAt": "2024-05-02 00:28:21",
      "updatedAt": "2024-05-02 00:28:21"
    },
    {
      "place": "Cancha District Directives Engineer",
      "status": "A",
      "createdAt": "2024-05-02 00:28:21",
      "updatedAt": "2024-05-02 00:28:21"
    },
    {
      "place": "Cancha Chief Assurance Orchestrator",
      "status": "A",
      "createdAt": "2024-05-02 00:28:22",
      "updatedAt": "2024-05-02 00:28:22"
    },
    {
      "place": "Cancha District Accounts Consultant",
      "status": "A",
      "createdAt": "2024-05-02 00:28:22",
      "updatedAt": "2024-05-02 00:28:22"
    },
    {
      "place": "Cancha Dynamic Communications Technician",
      "status": "A",
      "createdAt": "2024-05-02 00:28:23",
      "updatedAt": "2024-05-02 00:28:23"
    }
    ], {});
    await queryInterface.bulkInsert('teams', [{
      "name": "Team Forward Research Representative",
      "fk_event": 1,
      "createdAt": "2024-05-02 00:17:34",
      "updatedAt": "2024-05-02 00:17:34"
    },
    {
      "name": "Team Central Accountability Assistant",
      "fk_event": 1,
      "createdAt": "2024-05-02 00:17:35",
      "updatedAt": "2024-05-02 00:17:35"
    },
    {
      "name": "Team National Brand Agent",
      "fk_event": 1,
      "createdAt": "2024-05-02 00:17:36",
      "updatedAt": "2024-05-02 00:17:36"
    },
    {
      "name": "Team Chief Identity Consultant",
      "fk_event": 1,
      "createdAt": "2024-05-02 00:17:37",
      "updatedAt": "2024-05-02 00:17:37"
    },
    {
      "name": "Team District Applications Director",
      "fk_event": 1,
      "createdAt": "2024-05-02 00:17:38",
      "updatedAt": "2024-05-02 00:17:38"
    },
    {
      "name": "Team Direct Research Director",
      "fk_event": 1,
      "createdAt": "2024-05-02 00:17:38",
      "updatedAt": "2024-05-02 00:17:38"
    },
    {
      "name": "Team Regional Web Designer",
      "fk_event": 1,
      "createdAt": "2024-05-02 00:17:39",
      "updatedAt": "2024-05-02 00:17:39"
    },
    {
      "name": "Team National Configuration Associate",
      "fk_event": 1,
      "createdAt": "2024-05-02 00:17:40",
      "updatedAt": "2024-05-02 00:17:40"
    },
    {
      "name": "Team Lead Integration Liaison",
      "fk_event": 1,
      "createdAt": "2024-05-02 00:17:42",
      "updatedAt": "2024-05-02 00:17:42"
    }
    ], {});
    await queryInterface.bulkInsert('user_team', [{
      "fk_user": 4,
      "fk_team": 1,
      "createdAt": "2024-05-02 00:18:05",
      "updatedAt": "2024-05-02 00:18:05"
    },
    {
      "fk_user": 5,
      "fk_team": 1,
      "createdAt": "2024-05-02 00:18:05",
      "updatedAt": "2024-05-02 00:18:05"
    },
    {
      "fk_user": 2,
      "fk_team": 1,
      "createdAt": "2024-05-02 00:18:05",
      "updatedAt": "2024-05-02 00:18:05"
    },
    {
      "fk_user": 1,
      "fk_team": 1,
      "createdAt": "2024-05-02 00:18:05",
      "updatedAt": "2024-05-02 00:18:05"
    },
    {
      "fk_user": 3,
      "fk_team": 1,
      "createdAt": "2024-05-02 00:18:05",
      "updatedAt": "2024-05-02 00:18:05"
    },
    {
      "fk_user": 7,
      "fk_team": 2,
      "createdAt": "2024-05-02 00:18:23",
      "updatedAt": "2024-05-02 00:18:23"
    },
    {
      "fk_user": 8,
      "fk_team": 2,
      "createdAt": "2024-05-02 00:18:23",
      "updatedAt": "2024-05-02 00:18:23"
    },
    {
      "fk_user": 6,
      "fk_team": 2,
      "createdAt": "2024-05-02 00:18:23",
      "updatedAt": "2024-05-02 00:18:23"
    },
    {
      "fk_user": 9,
      "fk_team": 2,
      "createdAt": "2024-05-02 00:18:23",
      "updatedAt": "2024-05-02 00:18:23"
    },
    {
      "fk_user": 10,
      "fk_team": 2,
      "createdAt": "2024-05-02 00:18:23",
      "updatedAt": "2024-05-02 00:18:23"
    }
    ], {});
    await queryInterface.bulkInsert('matches', [{
      "score_local": 0,
      "score_visitor": 0,
      "goals_local": 0,
      "goals_visitor": 0,
      "start_date": "2022-11-26 01:43:48",
      "end_date": "2022-11-26 01:43:48",
      "fk_event": 1,
      "fk_court": 1,
      "fk_local": 1,
      "fk_visitor": 2,
      "createdAt": "2024-05-02 00:35:04",
      "updatedAt": "2024-05-02 00:35:04"
    },
    {
      "score_local": 0,
      "score_visitor": 0,
      "goals_local": 0,
      "goals_visitor": 0,
      "start_date": "2022-11-26 01:43:48",
      "end_date": "2022-11-26 01:43:48",
      "fk_event": 1,
      "fk_court": 1,
      "fk_local": 3,
      "fk_visitor": 4,
      "createdAt": "2024-05-02 00:35:15",
      "updatedAt": "2024-05-02 00:35:15"
    },
    {
      "score_local": 0,
      "score_visitor": 0,
      "goals_local": 0,
      "goals_visitor": 0,
      "start_date": "2022-11-26 01:43:48",
      "end_date": "2022-11-26 01:43:48",
      "fk_event": 1,
      "fk_court": 2,
      "fk_local": 5,
      "fk_visitor": 6,
      "createdAt": "2024-05-02 00:35:34",
      "updatedAt": "2024-05-02 00:35:34"
    },
    {
      "score_local": 0,
      "score_visitor": 0,
      "goals_local": 0,
      "goals_visitor": 0,
      "start_date": "2022-11-26 01:43:48",
      "end_date": "2022-11-26 01:43:48",
      "fk_event": 1,
      "fk_court": 2,
      "fk_local": 7,
      "fk_visitor": 8,
      "createdAt": "2024-05-02 00:35:43",
      "updatedAt": "2024-05-02 00:35:43"
    }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('matches', null, {});
    await queryInterface.bulkDelete('user_team', null, {});
    await queryInterface.bulkDelete('teams', null, {});
    await queryInterface.bulkDelete('courts', null, {});
    await queryInterface.bulkDelete('events', null, {});
    await queryInterface.bulkDelete('users', null, {});
  }
};