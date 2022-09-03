import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from 'typeorm';

export class AddFactoryIdToModel1648506235426 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'shoes_model',
      new TableColumn({
        name: 'factory_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'shoes_model',
      new TableForeignKey({
        name: 'fk_factory_model',
        columnNames: ['factory_id'],
        referencedTableName: 'factory',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('shoes_model', 'fk_factory_model');
    await queryRunner.dropColumn('shoes_model', 'factory_id');
  }
}
