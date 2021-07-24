import { MarkStudentAttendancePayload } from '@interfaces/IMarkStudentAttendance';
import { Controller } from '@localtypes/Controller';
import MarkStudentAttendanceService from '@services/firebase/MarkStudentAttendance/MarkStudentAttendanceService';
import { Request, Response } from 'express';

export default class MarkStudentAttendanceController implements Controller {
  async start(req: Request, res: Response) {
    const body: MarkStudentAttendancePayload = req.body;
    const service = new MarkStudentAttendanceService();
    try {
      const data = await service.mark(body);
      return res.status(200).json(data);
    } catch (error) {
      return res.status(404).json({
        message: error.message,
      });
    }
  }
}
