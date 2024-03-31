import { Model, Column, Table, HasMany } from "sequelize-typescript";
import Match from "./Match";

@Table({ tableName: "events" })
class Event extends Model {
	@Column({ primaryKey: true, autoIncrement: true })
    id!: number;

	@HasMany(() => Match)
	matches!: Match[];

	@Column({ allowNull: false })
	name!: string;

	@Column({ allowNull: false })
	start_date!: Date;

	@Column({ allowNull: false })
	end_date!: Date;

	@Column({ allowNull: false })
	ubication!: string;

	@Column({ allowNull: false })
	allowed_number!: number;
}

export default Event;