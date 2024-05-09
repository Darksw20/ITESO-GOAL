import { Model, Column, Table, ForeignKey } from "sequelize-typescript";
import User from "./User";
import Team from "./Team";

@Table({ tableName: "user_team" })
class UserTeam extends Model {
	@ForeignKey(() => User)
	@Column({ allowNull: false })
	fk_user!: number;

	@ForeignKey(() => Team)
	@Column({ allowNull: false })
	fk_team!: number;
	static model: any;
}

export default UserTeam;
