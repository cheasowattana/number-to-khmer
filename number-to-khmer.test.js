const numberToKhmer = require('./number-to-khmer');

test('convert2khmer function', () => {
    expect(
        numberToKhmer( 1252000 )
    ).toBe('មួយលានពីរសែនប្រាំមុឺនពីរពាន់');
});