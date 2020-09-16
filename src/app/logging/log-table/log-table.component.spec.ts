import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { LogMessageFormat, LogType } from 'logging-format';
import { LogTableComponent } from './log-table.component';


describe('LogTableComponent', () => {
    let component: LogTableComponent;
    let fixture: ComponentFixture<LogTableComponent>;
    // Dummy Logs for testing purpose
    const dummyLogs: LogMessageFormat[] = [
        {
            time: 1000 * 60 * 60 * 2,
            data: {
                cpuUtilization: 70
            },
            detector: "Detector X",
            source: "Source Y",
            type: LogType.CPU,
            message: null
        },
        {
            time: 1000 * 60 * 60 * 2,
            detector: "Detector A",
            source: "Source Y",
            type: LogType.ERROR,
            data: {
                expected: "10",
                result: "12"
            },
            message: null
        },
        {
            time: 1000 * 60 * 60,
            data: null,
            detector: "Detector B",
            source: "Source Y",
            type: LogType.CB_OPEN,
            message: null
        },
        {
            time: 0,
            data: null,
            detector: "Detector C",
            source: "Source Y",
            type: LogType.CPU,
            message: null
        }
    ]

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LogTableComponent],
            imports: [HttpClientModule, MatTableModule, BrowserAnimationsModule],
            providers: [{
                provide: ActivatedRoute,
                useValue: {
                    snapshot: {
                        params: {
                            get(): string {
                                return 'id';
                            },
                        },
                    },
                },
            }],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LogTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });


    it('should correctly load and display logs', (done) => {
        spyOn(component, 'fetchLogs').and.callFake(function () {
            console.log('adding dummmy logs');
            component.dataSource = new MatTableDataSource(dummyLogs);
            component.dataSource.sort = component.sort;
        });
        component.fetchLogs();
        fixture.detectChanges();
        expect(component.dataSource.sort).toEqual(new MatTableDataSource(dummyLogs).sort);


        fixture.whenStable().then(() => {
            fixture.detectChanges();

            let tableRows = fixture.nativeElement.querySelectorAll('tr');
            expect(tableRows.length).toBe(9);

            let headerRow = tableRows[0];
            expect(headerRow.cells[0].innerHTML).toBe('Time');
            expect(headerRow.cells[1].innerHTML).toBe('Log Type');
            expect(headerRow.cells[2].innerHTML).toBe('Detector');
            expect(headerRow.cells[3].innerHTML).toBe('Source');

            let row1 = tableRows[1];
            expect(row1.cells[0].innerHTML).toBe('01.01.1970 03:00');
            expect(row1.cells[1].innerHTML).toBe('Cpu');
            expect(row1.cells[2].innerHTML).toBe('Detector X');
            expect(row1.cells[3].innerHTML).toBe('Source Y');

            let row2 = tableRows[3];
            expect(row2.cells[0].innerHTML).toBe('01.01.1970 03:00');
            expect(row2.cells[1].innerHTML).toBe('Error');
            expect(row2.cells[2].innerHTML).toBe('Detector A');
            expect(row2.cells[3].innerHTML).toBe('Source Y');


            done();
        });

    })
});
