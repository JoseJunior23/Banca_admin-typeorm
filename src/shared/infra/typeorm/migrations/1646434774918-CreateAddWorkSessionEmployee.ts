import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from 'typeorm';

export class CreateAddWorkSessionEmployee1646434774918 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'employees',
      new TableColumn({
        name: 'work_session_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'employees',
      new TableForeignKey({
        name: 'fk_worksession_employees',
        columnNames: ['work_session_id'],
        referencedTableName: 'work_sessions',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('employees', 'fk_worksession_employees');
    await queryRunner.dropColumn('employees', 'work_session_id');
  }
}
