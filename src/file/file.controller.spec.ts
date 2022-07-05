import { Test, TestingModule } from '@nestjs/testing';
import { FileController } from './file.controller';
import { readFileSync, createReadStream } from "fs"
import { StreamableFile } from '@nestjs/common';
import { join } from 'path';

describe('FileController', () => {
  let controller: FileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
     providers: [
       FileController,
       {
         provide: FileController,
         useValue: {
          getFile: jest.fn(() => readFileSync("VERSION", {encoding:'utf8', flag:'r'}))
         }
       }
     ]
    }).compile();

    controller = module.get<FileController>(FileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined()
    expect(controller.getFile).toBeDefined()
  });

  it('should return the file version', async () => {
    const expected = readFileSync("VERSION", {encoding:'utf8', flag:'r'})
    expect(controller.getFile()).toStrictEqual(expected)
  })
});
