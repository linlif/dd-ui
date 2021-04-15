/**
 * @description 日期组件--周选择器
 * @author Linlif
 */

import React, { Component } from 'react';
import moment from 'moment';
// import 'moment/locale/zh-cn';

moment.locale('en', {
    week: {
        dow: 1, // Monday is the first day of the week.
        doy: 7  // First week of year must contain 1 January (7 + 1 - 1)
    }
})

// window.moment = moment

// let rowLen = 6


interface IProps {
    rowLen: number,
    onChange?: (v: object) => void,
}

interface IState {
    curYear: number,
    weeksInYear: number,
    mapWeeksOfyear: {
        [x: string]: {
            startTime: string,
            endTime: string,
            week: number,
        }
    },
    weeksInYearFormat?: Array<Array<number>>,
    activedKey?: string,
    curWeek?: number
}

class WeekPicker extends Component<IProps, IState> {
    state: IState = {
        curYear: moment().year(),
        weeksInYear: moment().weeksInYear(),
        mapWeeksOfyear: {
            // startTime: '',
            // endTime: '',
            // week: 0,
        }
    }

    static defaultProps = {
        rowLen: 6
    }

    componentDidMount() {
        moment.locale('fr'); // set to french
        moment.locale(); // returns 'fr'
        console.log('moment.locale', moment.locale())

        let week = moment().week()
        let week2 = moment('2023/1/1').week(3)
        console.log('moment().week()', week)
        console.log('moment().week(1)', week2.format('YYYY-MM-DD HH:mm:ss'))
        console.log('moment().weeksInYear()', moment('2021').weeksInYear())
        console.log('moment().isoWeeksInYear()', moment().isoWeeksInYear())

        const { weeksInYear } = this.state;
        const mapWeeksOfyear = this.mapWeeksOfyear(moment().year())

        this.setState({
            mapWeeksOfyear,
            weeksInYearFormat: this.formatWeeksToRender(weeksInYear)
        })
    }

    componentWillUnmount() {

    }

    // 对周进行格式化，方便渲染
    formatWeeksToRender = (weeksInYear: number): Array<number>[] => {
        let arr: any[] = [], temp: number[] = [];
        const { rowLen } = this.props;
        Array(weeksInYear).fill([]).forEach((v, idx) => {
            if (temp.length > rowLen - 1) {
                arr.push(temp)
                temp = []
            }
            temp.push(idx + 1)
            if (idx + 1 >= weeksInYear) {
                arr.push(temp)
            }
        })
        return arr
    }

    // 计算一年有多少周
    getWeeksInYear = (year = moment().year()) => {
        return moment().set('year', year).startOf('year').weeksInYear()
    }

    // 根据行列编号计算是第几周
    getWeekNum = (row: number, col: number) => {
        const { rowLen } = this.props
        return row * rowLen + col + 1
    }

    // 点击某一周
    handleWeekClicked = (rowNum: number, colNum: number) => () => {
        const { curYear, mapWeeksOfyear } = this.state,
            curWeek = this.getWeekNum(rowNum, colNum);

        this.setState({
            activedKey: rowNum + '_' + colNum,
            curWeek
        })

        const { onChange } = this.props;
        let key: string = curYear + '_' + curWeek,
            target = mapWeeksOfyear[key];

        let data = {
            ...target,
            year: curYear
        }
        typeof onChange == 'function' && onChange(data)

        // console.log('weekData!!!', data)
    }

    // 点击上一年按钮
    preYear = () => {
        let { curYear, mapWeeksOfyear } = this.state;

        if (curYear > 1970) {
            curYear--;

            let newMapWeeksOfyear = this.mapWeeksOfyear(curYear)
            const weeksInYear = this.getWeeksInYear(curYear)

            this.setState({
                curYear: curYear,
                weeksInYear,
                mapWeeksOfyear: { ...mapWeeksOfyear, ...newMapWeeksOfyear },
                weeksInYearFormat: this.formatWeeksToRender(weeksInYear)
            })
        }
    }

    // 点击下一年按钮
    nextYear = () => {
        let { curYear, mapWeeksOfyear } = this.state;
        curYear++;
        const weeksInYear = this.getWeeksInYear(curYear);
        let newMapWeeksOfyear = this.mapWeeksOfyear(curYear)

        this.setState({
            curYear,
            weeksInYear,
            mapWeeksOfyear: { ...mapWeeksOfyear, ...newMapWeeksOfyear },
            weeksInYearFormat: this.formatWeeksToRender(weeksInYear)
        })
    }

    // 算出一年有多少个周，并返回每一同的开始和结束时间
    mapWeeksOfyear = (year: number | undefined) => {
        const nowYear = year ? year : moment().year();
        const formatStr = 'YYYY-MM-DD HH:mm:ss';

        console.log('nowYear', nowYear)

        // 设置正在处理的年份
        let handleYear = moment(new Date(String(nowYear)));
        console.log('handleYear', handleYear.format(formatStr))


        // 这一年有多少个周
        // const totalWeeks = handleYear.endOf('year').isoWeek();
        const totalWeeks = this.getWeeksInYear(nowYear);
        const obj: any = {};

        for (let i = 1; i <= totalWeeks; i++) {
            obj[nowYear + '_' + i] = {
                week: i,
                name: '第' + i + '周',
                startTime: handleYear.weeks(i).startOf('week').format(formatStr),// 这周的开始时间
                endTime: handleYear.weeks(i).endOf('week').format(formatStr), // 这周的结束时间
            }
        }
        console.log(obj)
        return obj
    }

    render() {
        const { weeksInYearFormat = [], activedKey, curYear, mapWeeksOfyear = {} } = this.state;

        return (
            <div className='dd-week-picker'>
                <div className="picker-header">
                    <button onClick={this.preYear}>
                        <span className="super-prev-icon"></span>
                    </button>
                    <span className="title">{curYear}年</span>
                    <button onClick={this.nextYear}>
                        <span className="super-next-btn"></span>
                    </button>

                </div>
                <div className='weeks'>
                    {
                        weeksInYearFormat.map((line, rowNum) => {
                            return (
                                <div key={'rows_' + rowNum} className="rows">
                                    {
                                        line.map((l, colNum) => {
                                            const curWeek = this.getWeekNum(rowNum, colNum),
                                                key = curYear + '_' + curWeek,
                                                title = `${mapWeeksOfyear[key].startTime} ~ ${mapWeeksOfyear[key].endTime}`;

                                            return (
                                                <span
                                                    onClick={this.handleWeekClicked(rowNum, colNum)}
                                                    key={'cols_' + rowNum + '_' + colNum}
                                                    className={`cols ${activedKey === rowNum + '_' + colNum ? 'actived' : ''}`}
                                                    title={title}
                                                >
                                                    第{this.getWeekNum(rowNum, colNum)}周
                                                </span>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

// WeekPicker.defaultProps = {
//     rowLen: 6
// }

export default WeekPicker;