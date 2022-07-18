import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from 'typeorm';

export class CreateAddFactoryPlanInfo1648509080827 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'plan_info',
      new TableColumn({
        name: 'factory_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'plan_info',
      new TableForeignKey({
        name: 'fk_plan_info_factory',
        columnNames: ['factory_id'],
        referencedTableName: 'factory',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('plan_info', 'fk_plan_info_factory');
    await queryRunner.dropColumn('plan_info', 'factory_id');
  }
}
