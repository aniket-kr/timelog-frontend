import type {
    Division,
    Faculty,
    Nominal,
    Room,
    ScheduleId,
    Subject,
    TimeSlot,
} from '.';

export type LectureId = Nominal<number, 'LectureId'>;
export type Lecture = {
    lectureId: LectureId;
    schedule: ScheduleId;
    subject: Subject;
    divisions: Division[];
    room: Room;
    faculty: Faculty;
    timeSlot: TimeSlot;
};
