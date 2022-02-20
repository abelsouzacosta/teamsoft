import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export class AddColumnClientIdToAddressTable1645385936574
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    // adds column in the table
    await queryRunner.addColumn(
      "address",
      new TableColumn({
        name: "client_id",
        type: "integer",
        isNullable: false,
      })
    );

    // creates table foreign key
    await queryRunner.createForeignKey(
      "address",
      new TableForeignKey({
        name: "ClientAddressId",
        columnNames: ["client_id"],
        referencedTableName: "clients",
        referencedColumnNames: ["id"],
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // drops foreign key
    await queryRunner.dropForeignKey("address", "ClientAddressId");

    // drops column
    await queryRunner.dropColumn("address", "client_id");
  }
}
