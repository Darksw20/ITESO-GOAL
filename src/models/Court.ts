import { Model, Column, Table, HasMany } from "sequelize-typescript";
import Match from "./Match";

@Table({ tableName: "courts" })
class Court extends Model {
	@HasMany(() => Match)
	matches!: Match[];

	@Column({ allowNull: false })
	place!: string;

	@Column({ allowNull: false })
	status!: string;
}

export default Court;
