import {MigrationInterface, QueryRunner} from "typeorm";

export class cncDatabase1684921120778 implements MigrationInterface {
    name = 'cncDatabase1684921120778'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`detail_product\` (\`id\` varchar(36) NOT NULL, \`createdOnDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`createdByUserId\` varchar(255) NULL, \`lastModifiedOnDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`lastModifiedByUserId\` varchar(255) NULL, \`deletedAt\` datetime(6) NULL, \`name\` varchar(255) NOT NULL, \`image\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`productId\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`detailProductId\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`category\` ADD \`categoryImage\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`detail_product\` ADD CONSTRAINT \`FK_27a6f72155c0f5eb41fb9bbac61\` FOREIGN KEY (\`productId\`) REFERENCES \`product\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`detail_product\` DROP FOREIGN KEY \`FK_27a6f72155c0f5eb41fb9bbac61\``);
        await queryRunner.query(`ALTER TABLE \`category\` DROP COLUMN \`categoryImage\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`detailProductId\``);
        await queryRunner.query(`DROP TABLE \`detail_product\``);
    }

}
