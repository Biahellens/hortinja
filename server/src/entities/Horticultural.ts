import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm'
import { IsNotEmpty, IsInt, IsString, Min } from 'class-validator'

import { Category } from './Category'

/*export enum MeasurementType {
  KG = 'kg',
  UN = 'un',
}*/

@Entity('horticultures')
class Horticultural {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({ length: 100, unique: true })
  @IsString()
  @IsNotEmpty()
  name!: string

  @JoinColumn({ name: 'category_id' })
  @ManyToOne(() => Category)
  category!: Category

  @Column()
  @IsString()
  shade?: string

  @Column({ length: 225 })
  @IsString()
  image!: string

  @Column()
  @IsString()
  description?: string

  @Column()
  average_price!: number

  @Column()
  @IsString()
  measurement!: string

  @CreateDateColumn()
  created_at?: Date

  @UpdateDateColumn()
  updated_at?: Date
}

export { Horticultural }
