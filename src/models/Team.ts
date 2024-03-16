import {
	Model,
	Column,
	Table,
	BelongsToMany,
	HasMany,
} from "sequelize-typescript";
import User from "./User";
import UserTeam from "./UserTeam";
import Match from "./Match";

@Table({ tableName: "teams" })
class Team extends Model {
	@BelongsToMany(() => User, () => UserTeam)
	users!: User[];

	@HasMany(() => Match)
	matches!: Match[];

	@Column({ allowNull: false })
	name!: string;
}

export default Team;
