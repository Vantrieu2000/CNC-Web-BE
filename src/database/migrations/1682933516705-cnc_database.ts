import {MigrationInterface, QueryRunner} from "typeorm";

export class cncDatabase1682933516705 implements MigrationInterface {
    name = 'cncDatabase1682933516705'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`image\` (\`id\` varchar(36) NOT NULL, \`createdOnDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`createdByUserId\` varchar(255) NULL, \`lastModifiedOnDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`lastModifiedByUserId\` varchar(255) NULL, \`deletedAt\` datetime(6) NULL, \`productId\` varchar(255) NOT NULL, \`image\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`product\` (\`id\` varchar(36) NOT NULL, \`createdOnDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`createdByUserId\` varchar(255) NULL, \`lastModifiedOnDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`lastModifiedByUserId\` varchar(255) NULL, \`deletedAt\` datetime(6) NULL, \`name\` varchar(255) NOT NULL, \`price\` int NOT NULL, \`material\` varchar(255) NOT NULL, \`color\` varchar(255) NOT NULL, \`size\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`detail\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`image\` ADD CONSTRAINT \`FK_c6eb61588205e25a848ba6105cd\` FOREIGN KEY (\`productId\`) REFERENCES \`product\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`image\` DROP FOREIGN KEY \`FK_c6eb61588205e25a848ba6105cd\``);
        await queryRunner.query(`DROP TABLE \`product\``);
        await queryRunner.query(`DROP TABLE \`image\``);
    }

}
