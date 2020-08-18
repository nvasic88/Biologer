INSERT INTO `taxa` (id, parent_id, name, rank, rank_level, author, fe_old_id, fe_id, restricted, allochthonous, invasive, created_at, updated_at) VALUES (1,NULL,'Animalia','kingdom',70,NULL,NULL,NULL,0,0,0,'2017-11-12 08:04:11','2018-02-02 18:13:38'),(2,1,'Chordata','phylum',60,NULL,NULL,NULL,0,0,0,'2017-11-12 08:06:04','2018-02-02 18:13:38'),(3,1,'Arthropoda','phylum',60,NULL,NULL,NULL,0,0,0,'2017-11-12 08:06:24','2018-02-02 18:13:38'),(4,2,'Reptilia','class',50,NULL,NULL,NULL,0,0,0,'2017-11-12 08:07:36','2018-02-02 18:13:38'),(5,2,'Amphibia','class',50,NULL,NULL,NULL,0,0,0,'2017-11-12 08:08:28','2018-02-02 18:13:38'),(6,4,'Squamata','order',40,NULL,NULL,NULL,0,0,0,'2017-11-12 08:10:02','2018-02-02 18:13:38'),(7,4,'Testudines','order',40,NULL,NULL,NULL,0,0,0,'2017-11-12 08:15:03','2018-02-02 18:13:38'),(8,5,'Anura','order',40,NULL,NULL,NULL,0,0,0,'2017-11-12 08:15:36','2018-02-02 18:13:38'),(9,5,'Caudata','order',40,NULL,NULL,NULL,0,0,0,'2017-11-12 08:15:58','2018-02-02 18:13:38'),(10,6,'Anguidae','family',30,NULL,NULL,NULL,0,0,0,'2017-11-12 08:20:09','2018-02-02 18:13:38'),(11,6,'Colubridae','family',30,NULL,NULL,NULL,0,0,0,'2017-11-12 08:20:46','2018-02-02 18:13:38'),(12,6,'Gekkonidae','family',30,NULL,NULL,NULL,0,0,0,'2017-11-12 08:21:30','2018-02-02 18:13:38'),(13,6,'Lacertidae','family',30,NULL,NULL,NULL,0,0,0,'2017-11-12 08:21:59','2018-02-02 18:13:38'),(14,6,'Scincidae','family',30,NULL,NULL,NULL,0,0,0,'2017-11-12 08:23:16','2018-02-02 18:13:38'),(15,8,'Bombinatoridae','family',30,NULL,NULL,NULL,0,0,0,'2017-11-12 08:24:03','2018-02-02 18:13:38'),(16,8,'Bufonidae','family',30,NULL,NULL,NULL,0,0,0,'2017-11-12 08:24:22','2018-02-02 18:13:38'),(17,8,'Hylidae','family',30,NULL,NULL,NULL,0,0,0,'2017-11-12 08:24:50','2018-02-02 18:13:38'),(18,7,'Emydidae','family',30,NULL,NULL,NULL,0,0,0,'2017-11-12 08:25:06','2018-02-02 18:13:38'),(19,7,'Testudinidae','family',30,NULL,NULL,NULL,0,0,0,'2017-11-12 08:25:34','2018-02-02 18:13:38'),(20,6,'Viperidae','family',30,NULL,NULL,NULL,0,0,0,'2017-11-12 08:25:53','2018-02-02 18:13:38'),(21,8,'Pelobatidae','family',30,NULL,NULL,NULL,0,0,0,'2017-11-12 08:26:18','2018-02-02 18:13:38'),(22,8,'Ranidae','family',30,NULL,NULL,NULL,0,0,0,'2017-11-12 08:26:44','2018-02-02 18:13:38'),(23,9,'Salamandridae','family',30,NULL,NULL,NULL,0,0,0,'2017-11-12 08:27:08','2018-02-02 18:13:38'),(24,10,'Anguis','genus',20,NULL,NULL,NULL,0,0,0,'2017-11-12 08:27:30','2018-02-02 18:13:38'),(25,15,'Bombina','genus',20,NULL,NULL,NULL,0,0,0,'2017-11-12 08:27:48','2018-02-02 18:13:38'),(26,16,'Bufo','genus',20,NULL,NULL,NULL,0,0,0,'2017-11-12 08:28:02','2018-02-02 18:13:38'),(27,16,'Pseudepidalea','genus',20,NULL,NULL,NULL,0,0,0,'2017-11-12 08:28:29','2018-02-02 18:13:38'),(28,11,'Coronella','genus',20,NULL,NULL,NULL,0,0,0,'2017-11-12 08:28:51','2018-02-02 18:13:38'),(29,11,'Dolichophis','genus',20,NULL,NULL,NULL,0,0,0,'2017-11-12 08:29:20','2018-02-02 18:13:38'),(30,11,'Elaphe','genus',20,NULL,NULL,NULL,0,0,0,'2017-11-12 08:29:39','2018-02-02 18:13:38'),(31,11,'Natrix','genus',20,NULL,NULL,NULL,0,0,0,'2017-11-12 08:29:53','2018-02-02 18:13:38'),(32,11,'Platyceps','genus',20,NULL,NULL,NULL,0,0,0,'2017-11-12 08:30:06','2018-02-02 18:13:38'),(33,11,'Zamenis','genus',20,NULL,NULL,NULL,0,0,0,'2017-11-12 08:30:20','2018-02-02 18:13:38'),(34,18,'Emys','genus',20,NULL,NULL,NULL,0,0,0,'2017-11-12 08:30:38','2018-02-02 18:13:39'),(35,18,'Trachemys','genus',20,NULL,NULL,NULL,0,0,0,'2017-11-12 08:30:56','2018-02-02 18:13:39'),(36,12,'Cyrtopodion','genus',20,NULL,NULL,NULL,0,0,0,'2017-11-12 08:31:14','2018-02-02 18:13:39'),(37,17,'Hyla','genus',20,NULL,NULL,NULL,0,0,0,'2017-11-12 08:31:39','2018-02-02 18:13:39'),(38,13,'Algyroides','genus',20,NULL,NULL,NULL,0,0,0,'2017-11-12 08:31:52','2018-02-02 18:13:39'),(39,13,'Darevskia','genus',20,NULL,NULL,NULL,0,0,0,'2017-11-12 08:32:10','2018-02-02 18:13:39'),(40,13,'Lacerta','genus',20,NULL,NULL,NULL,0,0,0,'2017-11-12 08:32:27','2018-02-02 18:13:39'),(41,13,'Podarcis','genus',20,NULL,NULL,NULL,0,0,0,'2017-11-12 08:32:41','2018-02-02 18:13:39'),(42,13,'Zootoca','genus',20,NULL,NULL,NULL,0,0,0,'2017-11-12 08:32:55','2018-02-02 18:13:39'),(43,21,'Pelobates','genus',20,NULL,NULL,NULL,0,0,0,'2017-11-12 08:33:13','2018-02-02 18:13:39'),(44,22,'Pelophylax','genus',20,NULL,NULL,NULL,0,0,0,'2017-11-12 08:33:40','2018-02-02 18:13:39'),(45,22,'Rana','genus',20,NULL,NULL,NULL,0,0,0,'2017-11-12 08:33:56','2018-02-02 18:13:39'),(46,23,'Lissotriton','genus',20,NULL,NULL,NULL,0,0,0,'2017-11-12 08:34:15','2018-02-02 18:13:39'),(47,23,'Mesotriton','genus',20,NULL,NULL,NULL,0,0,0,'2017-11-12 08:34:38','2018-02-02 18:13:39'),(48,23,'Salamandra','genus',20,NULL,NULL,NULL,0,0,0,'2017-11-12 08:34:52','2018-02-02 18:13:39'),(49,23,'Triturus','genus',20,NULL,NULL,NULL,0,0,0,'2017-11-12 08:35:45','2018-02-02 18:13:39'),(50,14,'Ablepharus','genus',20,NULL,NULL,NULL,0,0,0,'2017-11-12 08:35:58','2018-02-02 22:03:08'),(51,19,'Testudo','genus',20,NULL,NULL,NULL,0,0,0,'2017-11-12 08:36:15','2018-02-02 18:13:39'),(52,20,'Vipera','genus',20,NULL,NULL,NULL,0,0,0,'2017-11-12 08:36:31','2018-02-02 18:13:39'),(53,24,'Anguis fragilis','species',10,NULL,NULL,NULL,0,0,0,'2017-11-12 08:36:53','2018-02-02 18:13:39'),(54,25,'Bombina bombina','species',10,NULL,NULL,NULL,0,0,0,'2017-11-12 08:37:35','2018-02-02 18:13:39'),(55,25,'Bombina variegata','species',10,NULL,NULL,NULL,0,0,0,'2017-11-12 08:37:50','2018-02-02 18:13:39'),(56,26,'Bufo bufo','species',10,NULL,NULL,NULL,0,0,0,'2017-11-12 08:38:08','2018-02-02 18:13:39'),(57,27,'Pseudepidalea viridis','species',10,NULL,NULL,NULL,0,0,0,'2017-11-12 08:38:46','2018-02-02 18:13:39'),(58,28,'Coronella austriaca','species',10,NULL,NULL,NULL,0,0,0,'2017-11-12 08:39:03','2018-02-02 18:13:39'),(59,29,'Dolichophis caspius','species',10,NULL,NULL,NULL,0,0,0,'2017-11-12 08:55:02','2018-02-02 18:13:39'),(60,30,'Elaphe quatuorlineata','species',10,NULL,NULL,NULL,0,0,0,'2017-11-12 08:55:18','2018-02-02 18:13:39'),(61,31,'Natrix natrix','species',10,NULL,NULL,NULL,0,0,0,'2017-11-12 08:55:33','2018-02-02 18:13:39'),(62,31,'Natrix tessellata','species',10,NULL,NULL,NULL,0,0,0,'2017-11-12 08:56:26','2018-02-02 18:13:39'),(63,32,'Platyceps najadum','species',10,NULL,NULL,NULL,0,0,0,'2017-11-12 08:56:57','2018-02-02 18:13:39'),(64,33,'Zamenis longissimus','species',10,NULL,NULL,NULL,0,0,0,'2017-11-12 08:57:29','2018-02-02 18:13:39'),(65,34,'Emys orbicularis','species',10,NULL,NULL,NULL,0,0,0,'2017-11-12 08:57:44','2018-02-02 18:13:39'),(66,35,'Trachemys scripta','species',10,NULL,NULL,NULL,0,0,0,'2017-11-12 08:57:58','2018-02-02 18:13:39'),(67,66,'Trachemys scripta elegans','subspecies',5,NULL,NULL,NULL,0,0,0,'2017-11-12 08:58:23','2018-02-02 18:13:39'),(68,36,'Cyrtopodion kotschyi','species',10,NULL,NULL,NULL,0,0,0,'2017-11-12 08:58:54','2018-02-02 18:13:39'),(69,37,'Hyla arborea','species',10,NULL,NULL,NULL,0,0,0,'2017-11-12 08:59:06','2018-02-02 18:13:39'),(70,38,'Algyroides nigropunctatus','species',10,NULL,NULL,NULL,0,0,0,'2017-11-12 08:59:21','2018-02-02 18:13:39'),(71,39,'Darevskia praticola','species',10,NULL,NULL,NULL,0,0,0,'2017-11-12 08:59:36','2018-02-02 18:13:39'),(72,40,'Lacerta agilis','species',10,NULL,NULL,NULL,0,0,0,'2017-11-12 08:59:46','2018-02-02 18:13:39'),(73,40,'Lacerta trilineata','species',10,NULL,NULL,NULL,0,0,0,'2017-11-12 08:59:58','2018-02-02 18:13:39'),(74,40,'Lacerta viridis','species',10,NULL,NULL,NULL,0,0,0,'2017-11-12 09:00:14','2018-02-02 18:13:39'),(75,41,'Podarcis erhardii','species',10,NULL,NULL,NULL,0,0,0,'2017-11-12 09:00:35','2018-02-02 18:13:39'),(76,41,'Podarcis muralis','species',10,NULL,NULL,NULL,0,0,0,'2017-11-12 09:00:47','2018-02-02 18:13:39'),(77,41,'Podarcis tauricus','species',10,NULL,NULL,NULL,0,0,0,'2017-11-12 09:01:00','2018-02-02 18:13:39'),(78,42,'Zootoca vivipara','species',10,NULL,NULL,NULL,0,0,0,'2017-11-12 09:01:15','2018-02-02 18:13:39'),(79,43,'Pelobates fuscus','species',10,NULL,NULL,NULL,0,0,0,'2017-11-12 09:01:28','2018-02-02 18:13:39'),(80,43,'Pelobates syriacus','species',10,NULL,NULL,NULL,0,0,0,'2017-11-12 09:01:45','2018-02-02 18:13:39'),(81,44,'Pelophylax esculentus','species',10,NULL,NULL,NULL,0,0,0,'2017-11-12 09:02:01','2018-02-02 18:13:39'),(82,44,'Pelophylax lessonae','species',10,NULL,NULL,NULL,0,0,0,'2017-11-12 09:02:15','2018-02-02 18:13:39'),(83,44,'Pelophylax ridibundus','species',10,NULL,NULL,NULL,0,0,0,'2017-11-12 09:02:36','2018-02-02 18:13:39'),(84,45,'Rana dalmatina','species',10,NULL,NULL,NULL,0,0,0,'2017-11-12 09:02:54','2018-02-02 18:13:39'),(85,45,'Rana graeca','species',10,NULL,NULL,NULL,0,0,0,'2017-11-12 09:03:05','2018-02-02 18:13:39'),(86,45,'Rana temporaria','species',10,NULL,NULL,NULL,0,0,0,'2017-11-12 09:03:18','2018-02-02 18:13:39'),(87,46,'Lissotriton vulgaris','species',10,NULL,NULL,NULL,0,0,0,'2017-11-12 09:04:04','2018-02-02 18:13:39'),(88,47,'Mesotriton alpestris','species',10,NULL,NULL,NULL,0,0,0,'2017-11-12 09:04:16','2018-02-02 18:13:39'),(89,48,'Salamandra atra','species',10,NULL,NULL,NULL,0,0,0,'2017-11-12 09:04:29','2018-02-02 18:13:39'),(90,48,'Salamandra salamandra','species',10,NULL,NULL,NULL,0,0,0,'2017-11-12 09:04:40','2018-02-02 18:13:40'),(91,49,'Triturus carnifex','species',10,NULL,NULL,NULL,0,0,0,'2017-11-12 09:04:52','2018-02-02 18:13:40'),(92,49,'Triturus cristatus','species',10,NULL,NULL,NULL,0,0,0,'2017-11-12 09:05:05','2018-02-02 18:13:40'),(93,49,'Triturus dobrogicus','species',10,NULL,NULL,NULL,0,0,0,'2017-11-12 09:05:18','2018-02-02 18:13:40'),(94,49,'Triturus karelinii','species',10,NULL,NULL,NULL,0,0,0,'2017-11-12 09:05:29','2018-02-02 18:13:40'),(95,50,'Ablepharus kitaibelii','species',10,NULL,NULL,NULL,0,0,0,'2017-11-12 09:05:45','2018-02-02 18:13:40'),(96,51,'Testudo graeca','species',10,NULL,NULL,NULL,0,0,0,'2017-11-12 09:05:57','2018-02-02 18:13:40'),(97,51,'Testudo hermanni','species',10,NULL,NULL,NULL,0,0,0,'2017-11-12 09:06:09','2018-02-02 18:13:40'),(98,52,'Vipera ammodytes','species',10,NULL,NULL,NULL,0,0,0,'2017-11-12 09:06:21','2018-02-02 18:13:40'),(99,52,'Vipera berus','species',10,NULL,NULL,NULL,0,0,0,'2017-11-12 09:06:35','2018-02-02 18:13:40'),(100,52,'Vipera ursinii','species',10,NULL,NULL,NULL,0,0,0,'2017-11-12 09:06:49','2018-02-02 18:13:40');

INSERT INTO `stage_taxon` VALUES (1,4),(1,5),(1,6),(1,7),(1,8),(1,9),(1,10),(1,11),(1,12),(1,13),(1,14),(1,15),(1,16),(1,17),(1,18),(1,19),(1,20),(1,21),(1,22),(1,23),(1,24),(1,25),(1,26),(1,27),(1,28),(1,29),(1,30),(1,31),(1,32),(1,33),(1,34),(1,35),(1,36),(1,37),(1,38),(1,39),(1,40),(1,41),(1,42),(1,43),(1,44),(1,45),(1,46),(1,47),(1,48),(1,49),(1,50),(1,51),(1,52),(1,53),(1,54),(1,55),(1,56),(1,57),(1,58),(1,59),(1,60),(1,61),(1,62),(1,63),(1,64),(1,65),(1,66),(1,67),(1,68),(1,69),(1,70),(1,71),(1,72),(1,73),(1,74),(1,75),(1,76),(1,77),(1,78),(1,79),(1,80),(1,81),(1,82),(1,83),(1,84),(1,85),(1,86),(1,87),(1,88),(1,89),(1,90),(1,91),(1,92),(1,93),(1,94),(1,95),(1,96),(1,97),(1,98),(1,99),(1,100),(2,5),(2,8),(2,9),(2,15),(2,16),(2,17),(2,21),(2,22),(2,23),(2,25),(2,26),(2,27),(2,37),(2,43),(2,44),(2,45),(2,46),(2,47),(2,48),(2,49),(2,54),(2,55),(2,56),(2,57),(2,69),(2,79),(2,80),(2,81),(2,82),(2,83),(2,84),(2,85),(2,86),(2,87),(2,88),(2,89),(2,90),(2,91),(2,92),(2,93),(2,94),(4,4),(4,6),(4,7),(4,10),(4,11),(4,12),(4,13),(4,14),(4,18),(4,19),(4,20),(4,24),(4,28),(4,29),(4,30),(4,31),(4,32),(4,33),(4,34),(4,35),(4,36),(4,38),(4,39),(4,40),(4,41),(4,42),(4,50),(4,51),(4,52),(4,53),(4,58),(4,59),(4,60),(4,61),(4,62),(4,63),(4,64),(4,65),(4,66),(4,67),(4,68),(4,70),(4,71),(4,72),(4,73),(4,74),(4,75),(4,76),(4,77),(4,78),(4,95),(4,96),(4,97),(4,98),(4,99),(4,100),(5,4),(5,5),(5,6),(5,7),(5,8),(5,9),(5,10),(5,11),(5,12),(5,13),(5,14),(5,15),(5,16),(5,17),(5,18),(5,19),(5,20),(5,21),(5,22),(5,23),(5,24),(5,25),(5,26),(5,27),(5,28),(5,29),(5,30),(5,31),(5,32),(5,33),(5,34),(5,35),(5,36),(5,37),(5,38),(5,39),(5,40),(5,41),(5,42),(5,43),(5,44),(5,45),(5,46),(5,47),(5,48),(5,49),(5,50),(5,51),(5,52),(5,53),(5,54),(5,55),(5,56),(5,57),(5,58),(5,59),(5,60),(5,61),(5,62),(5,63),(5,64),(5,65),(5,66),(5,67),(5,68),(5,69),(5,70),(5,71),(5,72),(5,73),(5,74),(5,75),(5,76),(5,77),(5,78),(5,79),(5,80),(5,81),(5,82),(5,83),(5,84),(5,85),(5,86),(5,87),(5,88),(5,89),(5,90),(5,91),(5,92),(5,93),(5,94),(5,95),(5,96),(5,97),(5,98),(5,99),(5,100);
