import { Model, Column, Table, BelongsToMany } from "sequelize-typescript";
import Team from "./Team";
import UserTeam from "./UserTeam";

@Table({ tableName: "users" })
class User extends Model {
	@BelongsToMany(() => Team, () => UserTeam)
	teams!: Team[];

	@Column({ allowNull: false })
	email!: string;

	@Column({ allowNull: false })
	first_name!: string;

	@Column({ allowNull: false })
	last_name!: string;

	@Column({ allowNull: false })
	birthday!: Date;

	@Column({ allowNull: false })
	password!: string;

	@Column({ allowNull: false })
	user_type!: string;
}

export default User;
