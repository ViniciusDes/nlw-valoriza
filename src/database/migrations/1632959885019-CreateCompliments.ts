import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCompliments1632959885019 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "compliments",
        columns: [
          {
            name: "id",
            type: "uui",
            isPrimary: true,
          },
          {
            name: "user_sender",
            type: "uui",
          },
          {
            name: "user_receiver",
            type: "uui",
          },
          {
            name: "tag_id",
            type: "uui",
          },
          {
            name: "message",
            type: "varchar",
          },

          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "FKUserSenderCompliments",
            referencedTableName: "users", // tabela origem referencia
            referencedColumnNames: ["id"], //coluna de origem referencia
            columnNames: ["user_sender"], //coluna propria
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
          {
            name: "FKUserReceiverCompliments",
            referencedTableName: "users", // tabela origem referencia
            referencedColumnNames: ["id"], //coluna de origem referencia
            columnNames: ["user_receiver"], //coluna propria
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
          {
            name: "FKUTagCompliments",
            referencedTableName: "tags", // tabela origem referencia
            referencedColumnNames: ["id"], //coluna de origem referencia
            columnNames: ["tag_id"], //coluna propria
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("compliments");
  }
}
