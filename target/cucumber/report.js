$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("US01-userMagasin.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Création du magasin",
  "description": "       En tant que résponsable je veux créer un magasin afin de le gérer et faire des actions comme \n       ajouter une caisse, faire une transaciton ...",
  "id": "création-du-magasin",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 26,
  "name": "Création d\u0027un magasin",
  "description": "",
  "id": "création-du-magasin;création-d\u0027un-magasin",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "La création dun magasin comprenant \u003cJeton\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "l\u0027utilisateur décide de créer un magasin",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "Création du magasin",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "création-du-magasin;création-d\u0027un-magasin;",
  "rows": [
    {
      "cells": [
        "Jeton"
      ],
      "line": 32,
      "id": "création-du-magasin;création-d\u0027un-magasin;;1"
    },
    {
      "cells": [
        "40"
      ],
      "line": 33,
      "id": "création-du-magasin;création-d\u0027un-magasin;;2"
    },
    {
      "cells": [
        "40"
      ],
      "line": 34,
      "id": "création-du-magasin;création-d\u0027un-magasin;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 33,
  "name": "Création d\u0027un magasin",
  "description": "",
  "id": "création-du-magasin;création-d\u0027un-magasin;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    },
    {
      "line": 25,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "La création dun magasin comprenant 40",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "l\u0027utilisateur décide de créer un magasin",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "Création du magasin",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "40",
      "offset": 35
    }
  ],
  "location": "US01Test.la_création_dun_magasin_comprenant(String)"
});
formatter.result({
  "duration": 89330773,
  "status": "passed"
});
formatter.match({
  "location": "US01Test.l_utilisateur_décide_de_créer_un_magasin()"
});
formatter.result({
  "duration": 42743,
  "status": "passed"
});
formatter.match({
  "location": "US01Test.création_du_magasin()"
});
formatter.result({
  "duration": 39927,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Création d\u0027un magasin",
  "description": "",
  "id": "création-du-magasin;création-d\u0027un-magasin;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    },
    {
      "line": 25,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "La création dun magasin comprenant 40",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "l\u0027utilisateur décide de créer un magasin",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "Création du magasin",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "40",
      "offset": 35
    }
  ],
  "location": "US01Test.la_création_dun_magasin_comprenant(String)"
});
formatter.result({
  "duration": 77019,
  "status": "passed"
});
formatter.match({
  "location": "US01Test.l_utilisateur_décide_de_créer_un_magasin()"
});
formatter.result({
  "duration": 14516,
  "status": "passed"
});
formatter.match({
  "location": "US01Test.création_du_magasin()"
});
formatter.result({
  "duration": 15695,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 37,
  "name": "si le responsable souhaite faire une action comme ouverture ou  fermeture du magasin",
  "description": "",
  "id": "création-du-magasin;si-le-responsable-souhaite-faire-une-action-comme-ouverture-ou--fermeture-du-magasin",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 36,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "voir letat du magasin which si elle est ouverte ou \u003couvert\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "lutilisateur Décide de modifier louverture du magasin \u003cferme\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "état du magasin est modifié",
  "keyword": "Then "
});
formatter.examples({
  "line": 42,
  "name": "",
  "description": "",
  "id": "création-du-magasin;si-le-responsable-souhaite-faire-une-action-comme-ouverture-ou--fermeture-du-magasin;",
  "rows": [
    {
      "cells": [
        "ouvert",
        "ferme"
      ],
      "line": 43,
      "id": "création-du-magasin;si-le-responsable-souhaite-faire-une-action-comme-ouverture-ou--fermeture-du-magasin;;1"
    },
    {
      "cells": [
        "YES",
        "NO"
      ],
      "line": 44,
      "id": "création-du-magasin;si-le-responsable-souhaite-faire-une-action-comme-ouverture-ou--fermeture-du-magasin;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 44,
  "name": "si le responsable souhaite faire une action comme ouverture ou  fermeture du magasin",
  "description": "",
  "id": "création-du-magasin;si-le-responsable-souhaite-faire-une-action-comme-ouverture-ou--fermeture-du-magasin;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    },
    {
      "line": 36,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "voir letat du magasin which si elle est ouverte ou YES",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "lutilisateur Décide de modifier louverture du magasin NO",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "état du magasin est modifié",
  "keyword": "Then "
});
formatter.match({
  "location": "US01Test.voir_letat_du_magasin_which_si_elle_est_ouverte_ou_YES()"
});
formatter.result({
  "duration": 40959,
  "status": "passed"
});
formatter.match({
  "location": "US01Test.lutilisateur_Décide_de_modifier_louverture_du_magasin_NO()"
});
formatter.result({
  "duration": 41395,
  "status": "passed"
});
formatter.match({
  "location": "US01Test.état_du_magasin_est_modifié()"
});
formatter.result({
  "duration": 49454,
  "status": "passed"
});
formatter.uri("US02-verif-CDM.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Hamzaoui Mohamed \u0026\u0026 Sersour Katia"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "étant donnée la création d\u0027un magasin et la création   de  plusieurs caisses dans ce magasin",
  "description": "       Le résponsable du magasin veut verifier, si les caisses sont bien ajouter dans le magasin \n       Ainsi, d\u0027avoir un bilan sur l\u0027état des caisses. C\u0027est-à-dire, si une caisse est en panne ou pas. \n       Si cette derniere est en panne le résponsable fais appel a un réparteur de caisses pour la réparer.",
  "id": "étant-donnée-la-création-d\u0027un-magasin-et-la-création---de--plusieurs-caisses-dans-ce-magasin",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 28,
  "name": "vérifier si les caisses existent dans le magasin",
  "description": "",
  "id": "étant-donnée-la-création-d\u0027un-magasin-et-la-création---de--plusieurs-caisses-dans-ce-magasin;vérifier-si-les-caisses-existent-dans-le-magasin",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 27,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "La vérification  dune caisse dans un magasin   comprenant",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "l\u0027utilisateur souhaite vérifier une caisse dans un magasin",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "La caisse est attribuer dans ce Magsin",
  "keyword": "Then "
});
formatter.match({
  "location": "US02Test.la_vérification_dune_caisse_dans_un_magasin_comprenant()"
});
formatter.result({
  "duration": 79739,
  "status": "passed"
});
formatter.match({
  "location": "US02Test.l_utilisateur_souhaite_vérifier_une_caisse_dans_un_magasin()"
});
formatter.result({
  "duration": 762700,
  "status": "passed"
});
formatter.match({
  "location": "US02Test.la_caisse_est_attribuer_dans_ce_Magsin()"
});
formatter.result({
  "duration": 98201,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "vérifier Caisse si elle est ouverte",
  "description": "",
  "id": "étant-donnée-la-création-d\u0027un-magasin-et-la-création---de--plusieurs-caisses-dans-ce-magasin;vérifier-caisse-si-elle-est-ouverte",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 34,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "étant donnée une caisse",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "l\u0027utilisateur décide de vérifier si la caisse est ouverte ou pas",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "la transaction",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "vérifier le fond de la ciasse aprés une transaction",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "renvoie l\u0027état de la caisse(ouverte ou pas)",
  "keyword": "Then "
});
formatter.match({
  "location": "US02Test.étant_donnée_une_caisse()"
});
formatter.result({
  "duration": 51563,
  "status": "passed"
});
formatter.match({
  "location": "US02Test.l_utilisateur_décide_de_vérifier_si_la_caisse_est_ouverte_ou_pas()"
});
formatter.result({
  "duration": 61042,
  "status": "passed"
});
formatter.match({
  "location": "US02Test.la_transaction()"
});
formatter.result({
  "duration": 63014,
  "status": "passed"
});
formatter.match({
  "location": "US02Test.vérifier_le_fond_de_la_ciasse_aprés_une_transaction()"
});
formatter.result({
  "duration": 39392,
  "status": "passed"
});
formatter.match({
  "location": "US02Test.renvoie_l_état_de_la_caisse_ouverte_ou_pas()"
});
formatter.result({
  "duration": 33335,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "CaissePanne : responsable dois vérifier si la caisse est en panne ou pas",
  "description": "",
  "id": "étant-donnée-la-création-d\u0027un-magasin-et-la-création---de--plusieurs-caisses-dans-ce-magasin;caissepanne-:-responsable-dois-vérifier-si-la-caisse-est-en-panne-ou-pas",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 43,
      "name": "@tag3"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "étant donne une caisse existante",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "quand l\u0027utilisateur souhaite verifier la panne d\u0027une caisse",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "l\u0027état de la caisse est renvoyée",
  "keyword": "Then "
});
formatter.match({
  "location": "US02Test.étant_donne_une_caisse_existante()"
});
formatter.result({
  "duration": 51079,
  "status": "passed"
});
formatter.match({
  "location": "US02Test.quand_l_utilisateur_souhaite_verifier_la_panne_d_une_caisse()"
});
formatter.result({
  "duration": 44220,
  "status": "passed"
});
formatter.match({
  "location": "US02Test.l_état_de_la_caisse_est_renvoyée()"
});
formatter.result({
  "duration": 49890,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "si la caisse est en panne alors le responsable fera appel a un reparateur, pour reparer la panne",
  "description": "        de  la caisse",
  "id": "étant-donnée-la-création-d\u0027un-magasin-et-la-création---de--plusieurs-caisses-dans-ce-magasin;si-la-caisse-est-en-panne-alors-le-responsable-fera-appel-a-un-reparateur,-pour-reparer-la-panne",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 49,
      "name": "@tag4"
    }
  ]
});
formatter.step({
  "line": 52,
  "name": "étant donnée une caisse qui est en panne",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "l\u0027utilisateur décide réparer la caisse",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "la caisse est réparé",
  "keyword": "Then "
});
formatter.match({
  "location": "US02Test.étant_donnée_une_caisse_qui_est_en_panne()"
});
formatter.result({
  "duration": 52820,
  "status": "passed"
});
formatter.match({
  "location": "US02Test.l_utilisateur_décide_réparer_la_caisse()"
});
formatter.result({
  "duration": 50381,
  "status": "passed"
});
formatter.match({
  "location": "US02Test.la_caisse_est_réparé()"
});
formatter.result({
  "duration": 34348,
  "status": "passed"
});
formatter.uri("US03-transactionMagasin.feature");
formatter.feature({
  "comments": [
    {
      "line": 2,
      "value": "#Author: Hamzaoui Mohamed \u0026\u0026 Sersour Katia"
    }
  ],
  "line": 5,
  "name": "transaction passée dans le magasin",
  "description": "       étant donnée la création du magasin\n       On veut avoir un résultat sur les transactions qui sont faites dans le magasin",
  "id": "transaction-passée-dans-le-magasin",
  "keyword": "Feature",
  "tags": [
    {
      "line": 4,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 10,
  "name": "transaction passé dans le magasin",
  "description": "",
  "id": "transaction-passée-dans-le-magasin;transaction-passé-dans-le-magasin",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "somme de tous les fonds de caisse 40 avec les jetons 70 qu\u0027on a dans le magasin",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "l\u0027utilisateur décide d\u0027avoir le total des fonds dans le magasin",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Total des fonds dans le magasin 110",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "40",
      "offset": 34
    },
    {
      "val": "70",
      "offset": 53
    }
  ],
  "location": "US03Test.somme_de_tous_les_fonds_de_caisse_avec_les_jetons_qu_on_a_dans_le_magasin(int,int)"
});
formatter.result({
  "duration": 995097,
  "status": "passed"
});
formatter.match({
  "location": "US03Test.l_utilisateur_décide_d_avoir_le_total_des_fonds_dans_le_magasin()"
});
formatter.result({
  "duration": 1233139,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "110",
      "offset": 32
    }
  ],
  "location": "US03Test.total_des_fonds_dans_le_magasin(int)"
});
formatter.result({
  "duration": 144840,
  "status": "passed"
});
formatter.uri("own pet.feature");
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
  "duration": 157065,
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
  "duration": 120431,
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
  "duration": 99529,
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
  "duration": 75278,
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
  "duration": 73508,
  "status": "passed"
});
formatter.match({
  "location": "OwnPetTest.when_I_add_the_pet_to_the_dragon()"
});
formatter.result({
  "duration": 50161,
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
  "duration": 85941,
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
  "name": "I have to get \"I don\u0027t have any pets\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OwnPetTest.that_I_have_a_dragon_without_a_pet()"
});
formatter.result({
  "duration": 57218,
  "status": "passed"
});
formatter.match({
  "location": "OwnPetTest.i_want_to_know_if_he_has_one()"
});
formatter.result({
  "duration": 41668,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "I don\u0027t have any pets",
      "offset": 15
    }
  ],
  "location": "OwnPetTest.i_should_get(String)"
});
formatter.result({
  "duration": 112255,
  "status": "passed"
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
  "duration": 97293,
  "status": "passed"
});
formatter.match({
  "location": "WieldSwordTest.when_I_ask_the_name_of_the_sword()"
});
formatter.result({
  "duration": 24962,
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
  "duration": 63419,
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
  "duration": 70083,
  "status": "passed"
});
formatter.match({
  "location": "WieldSwordTest.i_add_Excalibur_to_Lolo()"
});
formatter.result({
  "duration": 79669,
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
  "duration": 70885,
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
  "duration": 75260,
  "status": "passed"
});
formatter.match({
  "location": "WieldSwordTest.i_want_to_print_the_number_of_swords_I_have()"
});
formatter.result({
  "duration": 82866,
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
  "duration": 82242,
  "status": "passed"
});
});