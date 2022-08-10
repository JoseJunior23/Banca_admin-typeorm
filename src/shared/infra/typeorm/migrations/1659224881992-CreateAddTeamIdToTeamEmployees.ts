import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from 'typeorm';

export class CreateAddTeamIdToTeamEmployees1659224881992 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'team_employees',
      new TableColumn({
        name: 'team_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'team_employees',
      new TableForeignKey({
        name: 'fk_team_team_employees',
        columnNames: ['team_id'],
        referencedTableName: 'teams',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('team_employees', 'fk_team_team_employees');
    await queryRunner.dropColumn('team_employees', 'team_id');
  }
}
