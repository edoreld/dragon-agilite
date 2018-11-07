$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("own pet.feature");
formatter.feature({
  "line": 1,
  "name": "US02 - Own a pet",
  "description": "As a player\nI want to own a pet\nto feel less lonely",
  "id": "us02---own-a-pet",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "we want to create a pet with a name",
  "description": "",
  "id": "us02---own-a-pet;we-want-to-create-a-pet-with-a-name",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I want to add a pet with name \"\u003cactual_name\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I can create a name and retrieve its \"\u003cexpected_name\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "us02---own-a-pet;we-want-to-create-a-pet-with-a-name;",
  "rows": [
    {
      "cells": [
        "actual_name",
        "expected_name"
      ],
      "line": 11,
      "id": "us02---own-a-pet;we-want-to-create-a-pet-with-a-name;;1"
    },
    {
      "cells": [
        "toto",
        "toto"
      ],
      "line": 12,
      "id": "us02---own-a-pet;we-want-to-create-a-pet-with-a-name;;2"
    },
    {
      "cells": [
        "myPet",
        "myPet"
      ],
      "line": 13,
      "id": "us02---own-a-pet;we-want-to-create-a-pet-with-a-name;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "we want to create a pet with a name",
  "description": "",
  "id": "us02---own-a-pet;we-want-to-create-a-pet-with-a-name;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I want to add a pet with name \"toto\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I can create a name and retrieve its \"toto\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "toto",
      "offset": 31
    }
  ],
  "location": "OwnPetTest.i_want_to_add_a_pet_with_name(String)"
});
formatter.result({
  "duration": 140601303,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "toto",
      "offset": 38
    }
  ],
  "location": "OwnPetTest.i_can_create_a_name_and_retrieve_its(String)"
});
formatter.result({
  "duration": 106732,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "we want to create a pet with a name",
  "description": "",
  "id": "us02---own-a-pet;we-want-to-create-a-pet-with-a-name;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I want to add a pet with name \"myPet\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I can create a name and retrieve its \"myPet\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "myPet",
      "offset": 31
    }
  ],
  "location": "OwnPetTest.i_want_to_add_a_pet_with_name(String)"
});
formatter.result({
  "duration": 93057,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "myPet",
      "offset": 38
    }
  ],
  "location": "OwnPetTest.i_can_create_a_name_and_retrieve_its(String)"
});
formatter.result({
  "duration": 72121,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "The user wants to add a pet to his dragon",
  "description": "",
  "id": "us02---own-a-pet;the-user-wants-to-add-a-pet-to-his-dragon",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "that I have a pet called Toto and a dragon",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "when I add Toto to the dragon",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "when I ask for the dragon pet, it should say \"Toto\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OwnPetTest.that_I_have_a_pet_and_a_dragon()"
});
formatter.result({
  "duration": 58920,
  "status": "passed"
});
formatter.match({
  "location": "OwnPetTest.when_I_add_the_pet_to_the_dragon()"
});
formatter.result({
  "duration": 47227,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Toto",
      "offset": 46
    }
  ],
  "location": "OwnPetTest.when_I_ask_for_the_dragon_s_pet_it_should_say(String)"
});
formatter.result({
  "duration": 81865,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "We wanted to know if a dragon owns a pet or not",
  "description": "",
  "id": "us02---own-a-pet;we-wanted-to-know-if-a-dragon-owns-a-pet-or-not",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "that I have a dragon without a pet",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I want to know if he has one",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I should get \"I don\u0027t have any pets\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "I don\u0027t have any pets",
      "offset": 14
    }
  ],
  "location": "WieldSwordTest.i_should_get(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("wield swords.feature");
formatter.feature({
  "line": 1,
  "name": "US01 - Wield swords",
  "description": "As a player\nI want to wield swords to beat enemies\nso that I can earn prestige",
  "id": "us01---wield-swords",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "we can create a sword",
  "description": "",
  "id": "us01---wield-swords;we-can-create-a-sword",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I create a sword with name \"\u003cactual_name\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "when I ask the name of the sword",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the name of the sword should be \"\u003cexpected_name\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "us01---wield-swords;we-can-create-a-sword;",
  "rows": [
    {
      "cells": [
        "actual_name",
        "expected_name"
      ],
      "line": 12,
      "id": "us01---wield-swords;we-can-create-a-sword;;1"
    },
    {
      "cells": [
        "Excalibur",
        "Excalibur"
      ],
      "line": 13,
      "id": "us01---wield-swords;we-can-create-a-sword;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "we can create a sword",
  "description": "",
  "id": "us01---wield-swords;we-can-create-a-sword;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I create a sword with name \"Excalibur\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "when I ask the name of the sword",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the name of the sword should be \"Excalibur\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Excalibur",
      "offset": 28
    }
  ],
  "location": "WieldSwordTest.i_create_a_sword_with_name(String)"
});
formatter.result({
  "duration": 103728,
  "status": "passed"
});
formatter.match({
  "location": "WieldSwordTest.when_I_ask_the_name_of_the_sword()"
});
formatter.result({
  "duration": 41959,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Excalibur",
      "offset": 33
    }
  ],
  "location": "WieldSwordTest.the_name_of_the_sword_should_be(String)"
});
formatter.result({
  "duration": 119763,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "we can give a sword to a dragon",
  "description": "",
  "id": "us01---wield-swords;we-can-give-a-sword-to-a-dragon",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "that I create a sword named Excalibur and a dragon called Lolo",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I add Excalibur to Lolo",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "when I ask for the first sword of his list of swords, it should say \"Excalibur\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WieldSwordTest.that_I_create_a_sword_named_Excalibur_and_a_dragon_called_Lolo()"
});
formatter.result({
  "duration": 70235,
  "status": "passed"
});
formatter.match({
  "location": "WieldSwordTest.i_add_Excalibur_to_Lolo()"
});
formatter.result({
  "duration": 152687,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Excalibur",
      "offset": 69
    }
  ],
  "location": "WieldSwordTest.when_I_ask_for_the_first_sword_of_his_list_of_swords_it_should_say(String)"
});
formatter.result({
  "duration": 111706,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "we can print how many swords the dragon has",
  "description": "",
  "id": "us01---wield-swords;we-can-print-how-many-swords-the-dragon-has",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "that I have a dragon with two swords",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I want to print the number of swords I have",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I should get \"J\u0027ai 2 epees\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WieldSwordTest.that_I_have_a_dragon_with_two_swords()"
});
formatter.result({
  "duration": 74131,
  "status": "passed"
});
formatter.match({
  "location": "WieldSwordTest.i_want_to_print_the_number_of_swords_I_have()"
});
formatter.result({
  "duration": 105184,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "J\u0027ai 2 epees",
      "offset": 14
    }
  ],
  "location": "WieldSwordTest.i_should_get(String)"
});
formatter.result({
  "duration": 81011,
  "status": "passed"
});
});