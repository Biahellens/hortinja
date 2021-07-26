import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'
import { IsNotEmpty, IsString } from 'class-validator'

@Entity('categories')
class Category {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({ length: 100, unique: true })
  @IsString()
  @IsNotEmpty()
  name!: string

  @CreateDateColumn()
  created_at?: Date

  @UpdateDateColumn()
  updated_at?: Date
}

export { Category }
