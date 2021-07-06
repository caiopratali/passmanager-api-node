import { Request, Response } from "express";

import { DeleteAllUsersUseCase } from "./DeleteAllUsersUseCase";

class DeleteAllUsersController {
  constructor(private deleteAllUsersUseCase: DeleteAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    this.deleteAllUsersUseCase.execute();

    return response.send();
  }
}

export { DeleteAllUsersController };
