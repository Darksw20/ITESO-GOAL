import { Model, Column, Table, ForeignKey, BelongsTo } from "sequelize-typescript";
import Event from "./Event";
import Court from "./Court";
import Team from "./Team";

@Table({ tableName: "matches" })
class Match extends Model {
	@Column({ allowNull: false })
	score_local!: number;

	@Column({ allowNull: false })
	score_visitor!: number;

	@Column({ allowNull: false })
	goals_local!: number;

	@Column({ allowNull: false })
	goals_visitor!: number;

	@Column({ allowNull: false })
	start_date!: Date;

	@Column({ allowNull: false })
	end_date!: Date;

	@ForeignKey(() => Event)
	@Column({ allowNull: false })
	fk_event!: number;

	@ForeignKey(() => Court)
	@Column({ allowNull: false })
	fk_court!: number;

	@ForeignKey(() => Team)
	@Column({ allowNull: false })
	fk_local!: number;

	@ForeignKey(() => Team)
	@Column({ allowNull: false })
	fk_visitor!: number;

	@BelongsTo(() => Court)
	court!: Court;
}

export default Match;
