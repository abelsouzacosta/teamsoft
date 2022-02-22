import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateClients1645323648172 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "clients",
        columns: [
          {
            name: "id",
            type: "integer",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "cnpj",
            type: "varchar",
            isUnique: true,
          },
          {
            name: "corporate_name",
            type: "varchar",
            isUnique: true,
          },
          {
            name: "contact_name",
            type: "varchar",
          },
          {
            name: "phone",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("clients");
  }
}
