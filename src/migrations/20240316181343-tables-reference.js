'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Adding foreign key constraints
    await queryInterface.addConstraint('matches', {
      fields: ['fk_event'],
      type: 'foreign key',
      name: 'fk_event_constraint',
      references: {
        table: 'events',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });

    await queryInterface.addConstraint('matches', {
      fields: ['fk_court'],
      type: 'foreign key',
      name: 'fk_court_constraint',
      references: {
        table: 'courts',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });

    await queryInterface.addConstraint('matches', {
      fields: ['fk_local'],
      type: 'foreign key',
      name: 'fk_local_constraint',
      references: {
        table: 'teams',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });

    await queryInterface.addConstraint('matches', {
      fields: ['fk_visitor'],
      type: 'foreign key',
      name: 'fk_visitor_constraint',
      references: {
        table: 'teams',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });

    await queryInterface.addConstraint('user_team', {
      fields: ['fk_user'],
      type: 'foreign key',
      name: 'fk_user_constraint',
      references: {
        table: 'users',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });

    await queryInterface.addConstraint('user_team', {
      fields: ['fk_team'],
      type: 'foreign key',
      name: 'fk_team_constraint',
      references: {
        table: 'teams',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Removing foreign key constraints
    await queryInterface.removeConstraint('matches', 'fk_event_constraint');
    await queryInterface.removeConstraint('matches', 'fk_court_constraint');
    await queryInterface.removeConstraint('matches', 'fk_local_constraint');
    await queryInterface.removeConstraint('matches', 'fk_visitor_constraint');
    await queryInterface.removeConstraint('user_team', 'fk_user_constraint');
    await queryInterface.removeConstraint('user_team', 'fk_team_constraint');
  }
};