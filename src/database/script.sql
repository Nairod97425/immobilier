-- DROP TABLE IF EXISTS logement ;
-- CREATE TABLE logement (id_logement BIGINT AUTO_INCREMENT NOT NULL,
-- type_de_logement_gestionnaire TEXT,
-- lieux_logement VARCHAR,
-- surface_logement INT,
-- prix_logement INT,
-- nombre_de_personne_autorisé_logement INT,
-- nombre_de_piece_logement TEXT,
-- client_id_client BIGINT,
-- PRIMARY KEY (id_logement)) ENGINE=InnoDB;

-- DROP TABLE IF EXISTS gestionnaire ;
-- CREATE TABLE gestionnaire (id_gestionnaire BIGINT AUTO_INCREMENT NOT NULL,
-- type_de_logement_Entite 3 VARCHAR,
-- information_client_gestionnaire TEXT,
-- PRIMARY KEY (id_gestionnaire)) ENGINE=InnoDB;

-- DROP TABLE IF EXISTS client ;
-- CREATE TABLE client (id_client BIGINT AUTO_INCREMENT NOT NULL,
-- nom_client TEXT,
-- prenom_client TEXT,
-- age_client INT,
-- cni_client TEXT,
-- adresse_client TEXT,
-- logement_id_logement BIGINT,
-- PRIMARY KEY (id_client)) ENGINE=InnoDB;

-- DROP TABLE IF EXISTS gerance ;
-- CREATE TABLE gerance (id_gestionnaire **NOT FOUND** AUTO_INCREMENT NOT NULL,
-- id_logement **NOT FOUND** NOT NULL,
-- gestion_du_logement__gerance TEXT,
-- PRIMARY KEY (id_gestionnaire,
--  id_logement)) ENGINE=InnoDB;

-- DROP TABLE IF EXISTS gerance_ ;
-- CREATE TABLE gerance_ (id_gestionnaire **NOT FOUND** AUTO_INCREMENT NOT NULL,
-- id_client **NOT FOUND** NOT NULL,
-- gestion_client_gerance client  TEXT,
-- PRIMARY KEY (id_gestionnaire,
--  id_client)) ENGINE=InnoDB;

-- ALTER TABLE logement ADD CONSTRAINT FK_logement_client_id_client FOREIGN KEY (client_id_client) REFERENCES client (id_client);
-- ALTER TABLE client ADD CONSTRAINT FK_client_logement_id_logement FOREIGN KEY (logement_id_logement) REFERENCES logement (id_logement);
-- ALTER TABLE gerance ADD CONSTRAINT FK_gerance_id_gestionnaire FOREIGN KEY (id_gestionnaire) REFERENCES gestionnaire (id_gestionnaire);
-- ALTER TABLE gerance ADD CONSTRAINT FK_gerance_id_logement FOREIGN KEY (id_logement) REFERENCES logement (id_logement);
-- ALTER TABLE gerance_ ADD CONSTRAINT FK_gerance__id_gestionnaire FOREIGN KEY (id_gestionnaire) REFERENCES gestionnaire (id_gestionnaire);
-- ALTER TABLE gerance_ ADD CONSTRAINT FK_gerance__id_client FOREIGN KEY (id_client) REFERENCES client (id_client);



DROP TABLE IF EXISTS client ;
CREATE TABLE client (
  id SERIAL PRIMARY KEY,
  nom VARCHAR(50),
  prenom VARCHAR(50),
  PRIMARY KEY (id_client)) ENGINE=InnoDB;
);
