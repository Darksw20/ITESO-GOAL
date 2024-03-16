'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('users', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true
			},
			username: {
				type: Sequelize.STRING,
				allowNull: false
			},
			email: {
				type: Sequelize.STRING,
				allowNull: false
			},
			first_name: {
				type: Sequelize.STRING,
				allowNull: false
			},
			last_name: {
				type: Sequelize.STRING,
				allowNull: false
			},
			birthday: {
				type: Sequelize.DATE,
				allowNull: false
			},
			password: {
				type: Sequelize.STRING,
				allowNull: false
			},
			user_type: {
				type: Sequelize.STRING,
				allowNull: false
			},
			createdAt: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
			},
			updatedAt: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
			}
		});

		await queryInterface.createTable('courts', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true
			},
			place: {
				type: Sequelize.STRING,
				allowNull: false
			},
			status: {
				type: Sequelize.STRING,
				allowNull: false
			},
			createdAt: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
			},
			updatedAt: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
			}
		});

		await queryInterface.createTable('events', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false
			},
			start_date: {
				type: Sequelize.DATE,
				allowNull: false
			},
			end_date: {
				type: Sequelize.DATE,
				allowNull: false
			},
			ubication: {
				type: Sequelize.STRING,
				allowNull: false
			},
			allowed_number: {
				type: Sequelize.INTEGER,
				allowNull: false
			},
			createdAt: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
			},
			updatedAt: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
			}
		});

		await queryInterface.createTable('teams', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false
			},
			createdAt: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
			},
			updatedAt: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
			}
		});

		await queryInterface.createTable('matches', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true
			},
			score_local: {
				type: Sequelize.INTEGER,
				allowNull: false
			},
			score_visitor: {
				type: Sequelize.INTEGER,
				allowNull: false
			},
			goals_local: {
				type: Sequelize.INTEGER,
				allowNull: false
			},
			goals_visitor: {
				type: Sequelize.INTEGER,
				allowNull: false
			},
			start_date: {
				type: Sequelize.DATE,
				allowNull: false
			},
			end_date: {
				type: Sequelize.DATE,
				allowNull: false
			},
			fk_event: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			fk_court: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			fk_local: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			fk_visitor: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			createdAt: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
			},
			updatedAt: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
			}
		});

		await queryInterface.createTable('user_team', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true
			},
			fk_user: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			fk_team: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			createdAt: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
			},
			updatedAt: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
			}
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('users');
		await queryInterface.dropTable('courts');
		await queryInterface.dropTable('events');
		await queryInterface.dropTable('teams');
		await queryInterface.dropTable('matches');
		await queryInterface.dropTable('user_team');
	}
};