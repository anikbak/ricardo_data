20170601_séance_toflit18.md


# données TOFLIT

## nouvelles source toflit en partant de simplification

=> résoudre les problèmes de nom de partenaires
=> reporting = France

## on considère les données toflit comme prioritaire comparé à la source SF-1838

=> passer source toflit en primaire
=> passer SF-1838 en secondaire

# doublons

# intégrer nouvelles versions des fichiers

- Doublons Bulgarie   
Pour Bulgarian Lev : j'ai pris les données de Giovanni => fichiers corrigés Source_type, sources, exchange_rates.
=> intégrer les modifications de Source_type, sources, exchange_rates 
- Entité : 
- RICEntities et entity_name ajout de neu pommern, caroline islands, west indies, german solomon islands, french east africa, Serbia, mésopotamie

# Doublons argentine totaux

Pour Argentine total_reporting : c'était un problème d'unité.
reporting = Argentina
year in [1910-1938]
total_reporting = 1
**unit => 1**

reporting = Argentina
year in [1910-1938]
total_reporting = 1
year IN [1880,1881,1882]
Note = "Valor oficial"
**supprimer ces 6 lignes**



# Algérie

- modif à la main pour récupérer les virgules : **régler le problème des virgules exporter par openoffice**
- **importer 1851-1899**

# doublons de flux

## syrie egypte
dans entity_names => egypte et syrie (syrie);egypte et syrie (egypte) vers Syrie et Egypte

## suppression des doublosn valeurs officielles France est cassé

## mauvais partenaire  pour Québec
id = 2553659 partner = espagne => partner = "United states"

## bulgarie veille source
DELETE FROM flows where id in [
281828,281840,281831,281834,281835,281836,281839,281829,281838,281845,281850,281857,281848,281849,281851,281852,281853,281856,281846,281862,281864,281867,281874,281865,281866,281868,281875,281869,281870,281876,281873,281863,281879,281882,281883,281880,281896,281898,281899,281900,281897,281913,281916,281917,281914,281930,281932,281933,281934,281931,281871,281872,2544278,2544272,2544273,2544274,2544275,2544210,2544204,2544211,2544205,2544206,2544212,2544209,2544207,2544208,2544295,2544289,2544290,2544291,2544292,2544227,2544221,2544228,2544222,2544223,2544229,2544226,2544224,2544225]

## Bristish africa => Australia
id = 2552210 partner = australia

## British West Africa

ids in [2602415,2601548,2601629,2601710,2601791,2601872,2600743,2600828,2600996,2601080] and partner = 'west africa'
**partner => 'british west africa'**

## Australia

id = 2531139 and partner = "east indies" => partner = 'british east indies'
id = 2531215 and partner = "east indies" => partner = 'east indies (other)'

## IMP EXP in algérie
2521244,2521246,2521245 => Exp

## USA 

DELETE
id in [2487158,2487892,2501810,2503924,2507207,2488550,2488709,2488736,2489076,2490656,2489132,2489258,2489610,2494719,2487305,2505138,2508368,2501906,2491319,2491415,2491554,2492040,2492408,2492804,2492931,2493213,2500449,2493664,2504723,2494855,2494902,2504442,2487082,2504020,2507411,2499025,2495269,2495501,2495767,2496192,2496644,2496758,2492575,2497053,2497287,2497767,2497800,2498007,2490457,2498171,2498841,2499005,2490696,2494187,2502229,2499261,2499565,2499587,2499806,2492595,2492647,2500214,2500305,2500836,2501041,2501256,2494589,2496838,2501417,2501513,2501636,2501680,2502111,2502191,2502475,2502634,2503082,2503405,2503688,2505380,2505691,2494385,2505731,2506209,2505046,2506821,2495100,2507948,2508266,2493441,2488760]
source = 'Annual Report. Foreign Commerce and Navigation of the United States for 1913-14'

## brésil

2539549 partner = 'possessions britanniques en Amer. Nord et Centre'
2539558 partner = 'possessions britanniques en Amer. Sud'

## Columbia

2588808 parter = 'Marruecos español' 

