CREATE DATABASE servers;
USE servers;

CREATE TABLE companies(
	id int auto_increment,
    primary key(id),
    name varchar(255)
);

CREATE TABLE servers(
	id int auto_increment,
    primary key(id),
    name varchar(255),
    ip varchar(255),
    hostingCompany int,
    status bool default 0,
    foreign key(hostingCompany) references companies(id),
    created datetime default NOW()
);


INSERT INTO companies(name)
VALUES('Microsoft'),
('IBM'),
('GoDaddy'),
('CloudFlare'),
('Google'),
('Digital0');


INSERT INTO servers(name, ip, hostingCompany, created)
VALUES('MsServer', '123.34.245.001', 1, NOW());

INSERT INTO servers(name, ip, hostingCompany, created)
VALUES('BM Server', '103.134.35.101', 2, NOW());

INSERT INTO servers(name, ip, hostingCompany, created)
VALUES("Daddy's Server", '123.34.145.001', 3, NOW());

INSERT INTO servers(name, ip, hostingCompany, created)
VALUES('Cloud', '102.124.125.0', 4, NOW());

INSERT INTO servers(name, ip, hostingCompany, created)
VALUES('MsServer', '12.134.185.100', 5, NOW());

INSERT INTO servers(name, ip, hostingCompany, created)
VALUES('Digi Serv', '13.4.245.01', 6, NOW());

