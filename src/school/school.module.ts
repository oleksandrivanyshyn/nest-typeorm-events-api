import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subject } from './subject.entity';
import { Teacher } from './teacher.entity';
import { TeacherResolver } from './teacher.resolver';
import { CourseResolver } from './course.resolver';
import { SubjectResolver } from './subject.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Subject, Teacher])],
  providers: [TeacherResolver, CourseResolver, SubjectResolver],
  controllers: [],
})
export class SchoolModule {}
