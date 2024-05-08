import {
	Model,
	Column,
	Table,
	BelongsToMany,
	HasMany,
	ForeignKey,
} from "sequelize-typescript";
import User from "./User";
import UserTeam from "./UserTeam";
import Match from "./Match";
import Event from "./Event";

@Table({ tableName: "teams" })
class Team extends Model {
	@BelongsToMany(() => User, () => UserTeam)
	users!: User[];

	@HasMany(() => Match)
	matches!: Match[];

	@Column({ allowNull: false })
	name!: string;

	@Column({ allowNull: false })
	code!: string;

	@ForeignKey(() => Event)
	@Column({ allowNull: false })
	fk_event!: number;
}

export default Team;
