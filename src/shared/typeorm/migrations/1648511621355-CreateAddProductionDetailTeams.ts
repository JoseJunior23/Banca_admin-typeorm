import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from 'typeorm';

export class CreateAddProductionDetailTeams1648511621355 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'production_detail',
      new TableColumn({
        name: 'teams_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'production_detail',
      new TableForeignKey({
        name: 'fk_production_detail_teams',
        columnNames: ['teams_id'],
        referencedTableName: 'teams',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('production_detail', 'fk_production_detail_teams');
    await queryRunner.dropColumn('production_detail', 'teams_id');
  }
}
