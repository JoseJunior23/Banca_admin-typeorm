import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from 'typeorm';

export class CreateAddFactoryProductionPlan1648509080827 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'production_plan',
      new TableColumn({
        name: 'factory_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'production_plan',
      new TableForeignKey({
        name: 'fk_production_plan_factory',
        columnNames: ['factory_id'],
        referencedTableName: 'factory',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('production_plan', 'fk_production_plan_factory');
    await queryRunner.dropColumn('production_plan', 'factory_id');
  }
}
