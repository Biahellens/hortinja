import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm'
import { IsNotEmpty, IsString } from 'class-validator'

import { Horticultural } from './Horticultural'

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

  @OneToMany(() => Horticultural, (horticultural) => horticultural.category)
  horticultures?: Horticultural[]
}

export { Category }
