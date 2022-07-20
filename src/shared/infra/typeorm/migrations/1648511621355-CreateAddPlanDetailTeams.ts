import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from 'typeorm';

export class CreateAddPlanDetailTeams1648511621355 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'plan_detail',
      new TableColumn({
        name: 'teams_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'plan_detail',
      new TableForeignKey({
        name: 'fk_plan_detail_teams',
        columnNames: ['teams_id'],
        referencedTableName: 'teams',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('plan_detail', 'fk_plan_detail_teams');
    await queryRunner.dropColumn('plan_detail', 'teams_id');
  }
}
