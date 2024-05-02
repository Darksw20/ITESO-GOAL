'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        "id": 1,
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
        "id": 2,
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
        "id": 3,
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
        "id": 4,
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
        "id": 5,
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
        "id": 6,
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
        "id": 7,
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
        "id": 8,
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
        "id": 9,
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
        "id": 10,
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
        "id": 11,
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
        "id": 12,
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
        "id": 13,
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
        "id": 14,
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
        "id": 15,
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
        "id": 16,
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
        "id": 17,
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
        "id": 18,
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
        "id": 19,
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
        "id": 20,
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
        "id": 21,
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
        "id": 22,
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
        "id": 23,
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
        "id": 24,
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
        "id": 25,
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
        "id": 26,
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
        "id": 27,
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
        "id": 28,
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
        "id": 29,
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
        "id": 30,
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
        "id": 31,
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
        "id": 32,
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
        "id": 33,
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
        "id": 34,
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
        "id": 35,
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
        "id": 36,
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
        "id": 37,
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
        "id": 38,
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
        "id": 39,
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
        "id": 40,
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
        "id": 41,
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
        "id": 42,
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
        "id": 43,
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
        "id": 44,
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
        "id": 45,
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
        "id": 46,
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
        "id": 47,
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
        "id": 48,
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
        "id": 49,
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
        "id": 50,
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
        "id": 51,
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
        "id": 52,
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
    await queryInterface.bulkInsert('events', [
      {
        "id": 1,
        "name": "Evento Tactics",
        "start_date": "2022-11-26 01:43:48",
        "end_date": "2022-11-26 02:43:48",
        "ubication": "Estadio Akron",
        "allowed_number": 5,
        "createdAt": "2024-05-02 00:14:39",
        "updatedAt": "2024-05-02 00:14:39"
      },
      {
        "id": 2,
        "name": "Evento Communications",
        "start_date": "2022-11-26 01:43:48",
        "end_date": "2022-11-26 02:43:48",
        "ubication": "Estadio Akron",
        "allowed_number": 5,
        "createdAt": "2024-05-02 00:14:40",
        "updatedAt": "2024-05-02 00:14:40"
      },
      {
        "id": 3,
        "name": "Evento Data",
        "start_date": "2022-11-26 01:43:48",
        "end_date": "2022-11-26 02:43:48",
        "ubication": "Estadio Akron",
        "allowed_number": 5,
        "createdAt": "2024-05-02 00:14:40",
        "updatedAt": "2024-05-02 00:14:40"
      },
      {
        "id": 4,
        "name": "Evento Identity",
        "start_date": "2022-11-26 01:43:48",
        "end_date": "2022-11-26 02:43:48",
        "ubication": "Estadio Akron",
        "allowed_number": 5,
        "createdAt": "2024-05-02 00:14:41",
        "updatedAt": "2024-05-02 00:14:41"
      },
      {
        "id": 5,
        "name": "Evento Usability",
        "start_date": "2022-11-26 01:43:48",
        "end_date": "2022-11-26 02:43:48",
        "ubication": "Estadio Akron",
        "allowed_number": 5,
        "createdAt": "2024-05-02 00:14:42",
        "updatedAt": "2024-05-02 00:14:42"
      },
      {
        "id": 6,
        "name": "Evento Communications",
        "start_date": "2022-11-26 01:43:48",
        "end_date": "2022-11-26 02:43:48",
        "ubication": "Estadio Akron",
        "allowed_number": 5,
        "createdAt": "2024-05-02 00:14:42",
        "updatedAt": "2024-05-02 00:14:42"
      },
      {
        "id": 7,
        "name": "Evento Program",
        "start_date": "2022-11-26 01:43:48",
        "end_date": "2022-11-26 02:43:48",
        "ubication": "Estadio Akron",
        "allowed_number": 5,
        "createdAt": "2024-05-02 00:14:43",
        "updatedAt": "2024-05-02 00:14:43"
      },
      {
        "id": 8,
        "name": "Evento Integration",
        "start_date": "2022-11-26 01:43:48",
        "end_date": "2022-11-26 02:43:48",
        "ubication": "Estadio Akron",
        "allowed_number": 5,
        "createdAt": "2024-05-02 00:14:44",
        "updatedAt": "2024-05-02 00:14:44"
      },
      {
        "id": 9,
        "name": "Evento Usability",
        "start_date": "2022-11-26 01:43:48",
        "end_date": "2022-11-26 02:43:48",
        "ubication": "Estadio Akron",
        "allowed_number": 5,
        "createdAt": "2024-05-02 00:14:44",
        "updatedAt": "2024-05-02 00:14:44"
      },
      {
        "id": 10,
        "name": "Evento Program",
        "start_date": "2022-11-26 01:43:48",
        "end_date": "2022-11-26 02:43:48",
        "ubication": "Estadio Akron",
        "allowed_number": 5,
        "createdAt": "2024-05-02 00:14:45",
        "updatedAt": "2024-05-02 00:14:45"
      },
      {
        "id": 11,
        "name": "Evento Data",
        "start_date": "2022-11-26 01:43:48",
        "end_date": "2022-11-26 02:43:48",
        "ubication": "Estadio Akron",
        "allowed_number": 5,
        "createdAt": "2024-05-02 00:14:46",
        "updatedAt": "2024-05-02 00:14:46"
      },
      {
        "id": 12,
        "name": "Evento Creative",
        "start_date": "2022-11-26 01:43:48",
        "end_date": "2022-11-26 02:43:48",
        "ubication": "Estadio Akron",
        "allowed_number": 5,
        "createdAt": "2024-05-02 00:14:46",
        "updatedAt": "2024-05-02 00:14:46"
      },
      {
        "id": 13,
        "name": "Evento Solutions",
        "start_date": "2022-11-26 01:43:48",
        "end_date": "2022-11-26 02:43:48",
        "ubication": "Estadio Akron",
        "allowed_number": 5,
        "createdAt": "2024-05-02 00:14:48",
        "updatedAt": "2024-05-02 00:14:48"
      },
      {
        "id": 14,
        "name": "Evento Marketing",
        "start_date": "2022-11-26 01:43:48",
        "end_date": "2022-11-26 02:43:48",
        "ubication": "Estadio Akron",
        "allowed_number": 5,
        "createdAt": "2024-05-02 00:14:49",
        "updatedAt": "2024-05-02 00:14:49"
      },
      {
        "id": 15,
        "name": "Evento Creative",
        "start_date": "2022-11-26 01:43:48",
        "end_date": "2022-11-26 02:43:48",
        "ubication": "Estadio Akron",
        "allowed_number": 5,
        "createdAt": "2024-05-02 00:14:50",
        "updatedAt": "2024-05-02 00:14:50"
      }
    ], {});
    await queryInterface.bulkInsert('courts', [
      {
        "id": 1,
        "place": "Cancha Lead Assurance Officer",
        "status": "A",
        "createdAt": "2024-05-02 00:28:13",
        "updatedAt": "2024-05-02 00:28:13"
      },
      {
        "id": 2,
        "place": "Cancha Product Group Engineer",
        "status": "A",
        "createdAt": "2024-05-02 00:28:17",
        "updatedAt": "2024-05-02 00:28:17"
      },
      {
        "id": 3,
        "place": "Cancha Internal Assurance Planner",
        "status": "A",
        "createdAt": "2024-05-02 00:28:18",
        "updatedAt": "2024-05-02 00:28:18"
      },
      {
        "id": 4,
        "place": "Cancha Corporate Accountability Consultant",
        "status": "A",
        "createdAt": "2024-05-02 00:28:19",
        "updatedAt": "2024-05-02 00:28:19"
      },
      {
        "id": 5,
        "place": "Cancha Human Marketing Executive",
        "status": "A",
        "createdAt": "2024-05-02 00:28:20",
        "updatedAt": "2024-05-02 00:28:20"
      },
      {
        "id": 6,
        "place": "Cancha Future Marketing Strategist",
        "status": "A",
        "createdAt": "2024-05-02 00:28:20",
        "updatedAt": "2024-05-02 00:28:20"
      },
      {
        "id": 7,
        "place": "Cancha National Brand Officer",
        "status": "A",
        "createdAt": "2024-05-02 00:28:21",
        "updatedAt": "2024-05-02 00:28:21"
      },
      {
        "id": 8,
        "place": "Cancha District Directives Engineer",
        "status": "A",
        "createdAt": "2024-05-02 00:28:21",
        "updatedAt": "2024-05-02 00:28:21"
      },
      {
        "id": 9,
        "place": "Cancha Chief Assurance Orchestrator",
        "status": "A",
        "createdAt": "2024-05-02 00:28:22",
        "updatedAt": "2024-05-02 00:28:22"
      },
      {
        "id": 10,
        "place": "Cancha District Accounts Consultant",
        "status": "A",
        "createdAt": "2024-05-02 00:28:22",
        "updatedAt": "2024-05-02 00:28:22"
      },
      {
        "id": 11,
        "place": "Cancha Dynamic Communications Technician",
        "status": "A",
        "createdAt": "2024-05-02 00:28:23",
        "updatedAt": "2024-05-02 00:28:23"
      }
    ], {});
    await queryInterface.bulkInsert('teams', [
      {
        "id": 1,
        "name": "Team Forward Research Representative",
        "fk_event": 1,
        "createdAt": "2024-05-02 00:17:34",
        "updatedAt": "2024-05-02 00:17:34"
      },
      {
        "id": 2,
        "name": "Team Central Accountability Assistant",
        "fk_event": 1,
        "createdAt": "2024-05-02 00:17:35",
        "updatedAt": "2024-05-02 00:17:35"
      },
      {
        "id": 3,
        "name": "Team National Brand Agent",
        "fk_event": 1,
        "createdAt": "2024-05-02 00:17:36",
        "updatedAt": "2024-05-02 00:17:36"
      },
      {
        "id": 4,
        "name": "Team Chief Identity Consultant",
        "fk_event": 1,
        "createdAt": "2024-05-02 00:17:37",
        "updatedAt": "2024-05-02 00:17:37"
      },
      {
        "id": 5,
        "name": "Team District Applications Director",
        "fk_event": 1,
        "createdAt": "2024-05-02 00:17:38",
        "updatedAt": "2024-05-02 00:17:38"
      },
      {
        "id": 6,
        "name": "Team Direct Research Director",
        "fk_event": 1,
        "createdAt": "2024-05-02 00:17:38",
        "updatedAt": "2024-05-02 00:17:38"
      },
      {
        "id": 7,
        "name": "Team Regional Web Designer",
        "fk_event": 1,
        "createdAt": "2024-05-02 00:17:39",
        "updatedAt": "2024-05-02 00:17:39"
      },
      {
        "id": 8,
        "name": "Team National Configuration Associate",
        "fk_event": 1,
        "createdAt": "2024-05-02 00:17:40",
        "updatedAt": "2024-05-02 00:17:40"
      },
      {
        "id": 9,
        "name": "Team Lead Integration Liaison",
        "fk_event": 1,
        "createdAt": "2024-05-02 00:17:42",
        "updatedAt": "2024-05-02 00:17:42"
      }
    ], {});
    await queryInterface.bulkInsert('user_teams', [
      {
        "id": 1,
        "fk_user": 4,
        "fk_team": 1,
        "createdAt": "2024-05-02 00:18:05",
        "updatedAt": "2024-05-02 00:18:05"
      },
      {
        "id": 2,
        "fk_user": 5,
        "fk_team": 1,
        "createdAt": "2024-05-02 00:18:05",
        "updatedAt": "2024-05-02 00:18:05"
      },
      {
        "id": 3,
        "fk_user": 2,
        "fk_team": 1,
        "createdAt": "2024-05-02 00:18:05",
        "updatedAt": "2024-05-02 00:18:05"
      },
      {
        "id": 4,
        "fk_user": 1,
        "fk_team": 1,
        "createdAt": "2024-05-02 00:18:05",
        "updatedAt": "2024-05-02 00:18:05"
      },
      {
        "id": 5,
        "fk_user": 3,
        "fk_team": 1,
        "createdAt": "2024-05-02 00:18:05",
        "updatedAt": "2024-05-02 00:18:05"
      },
      {
        "id": 6,
        "fk_user": 7,
        "fk_team": 2,
        "createdAt": "2024-05-02 00:18:23",
        "updatedAt": "2024-05-02 00:18:23"
      },
      {
        "id": 7,
        "fk_user": 8,
        "fk_team": 2,
        "createdAt": "2024-05-02 00:18:23",
        "updatedAt": "2024-05-02 00:18:23"
      },
      {
        "id": 8,
        "fk_user": 6,
        "fk_team": 2,
        "createdAt": "2024-05-02 00:18:23",
        "updatedAt": "2024-05-02 00:18:23"
      },
      {
        "id": 9,
        "fk_user": 9,
        "fk_team": 2,
        "createdAt": "2024-05-02 00:18:23",
        "updatedAt": "2024-05-02 00:18:23"
      },
      {
        "id": 10,
        "fk_user": 10,
        "fk_team": 2,
        "createdAt": "2024-05-02 00:18:23",
        "updatedAt": "2024-05-02 00:18:23"
      }
    ], {});
    await queryInterface.bulkInsert('matches', [
      {
        "id": 1,
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
        "id": 2,
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
        "id": 3,
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
        "id": 4,
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

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('matches', null, {});
    await queryInterface.bulkDelete('user_team', null, {});
    await queryInterface.bulkDelete('teams', null, {});
    await queryInterface.bulkDelete('courts', null, {});
    await queryInterface.bulkDelete('events', null, {});
    await queryInterface.bulkDelete('users', null, {});
  }
};
