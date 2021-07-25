import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity('categories')
class Category {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({ length: 100, nullable: false })
  name!: string

  @CreateDateColumn()
  created_at?: Date

  @UpdateDateColumn()
  updated_at?: Date
}

export { Category }
