import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from 'typeorm';

export class AddPlanInfoIdToPlanDetail1648510244495 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'plan_detail',
      new TableColumn({
        name: 'plan_info_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'plan_detail',
      new TableForeignKey({
        name: 'fk_plan_info_detail',
        columnNames: ['plan_info_id'],
        referencedTableName: 'plan_info',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('plan_detail', 'fk_plan_info_detail');
    await queryRunner.dropColumn('plan_detail', 'plan_info_id');
  }
}
