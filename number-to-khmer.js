const khmerNumber = [{ kh: 'សូន្យ' },{ kh: 'មួយ' },{ kh: 'ពីរ' },{ kh: 'បី' },{ kh: 'បួន' },{ kh: 'ប្រាំ' },
    { kh: 'ប្រាំមួយ' },{ kh: 'ប្រាំពីរ' },{ kh: 'ប្រាំបី' },{ kh: 'ប្រាំបួន'}];

const ខ្ទង់សិប = [{ kh: '' }, { kh: 'ដប់' }, { kh: 'ម្ភៃ' }, { kh: 'សាម' }, { kh: 'សែ' }, { kh: 'ហា' }, { kh: 'ហុក' }, { kh: 'ចិត' },
                    { kh: 'ប៉ែត' }, { kh: 'កៅ' }]

const khmerGenerator = ( valueStr ) => {
    let khmer = '';
    const numLength = valueStr.length;

    for( var i = 0; i < numLength; i++ ){
        const subStr = valueStr.substring(i);
        
        const firstNumber = subStr.substring(0, 1);
        if( firstNumber !== '0' )
            if( numLength - i === 7 ){ ///ខ្ទង់លាន
                khmer += `${khmerNumber[firstNumber].kh}លាន`;
            } else if( numLength - i === 6 ) { ///ខ្ទង់សែន
                khmer += `${khmerNumber[firstNumber].kh}សែន`;
            } else if( numLength - i === 5 ) { ///ខ្ទង់មុឺន
                khmer += `${khmerNumber[firstNumber].kh}មុឺន`;
            } else if( numLength - i === 4 ) { ///ខ្ទង់ពាន់
                khmer += `${khmerNumber[firstNumber].kh}ពាន់`;
            } else if( numLength - i === 3 ) { ///ខ្ទង់រយ
                khmer += `${khmerNumber[firstNumber].kh}រយ`;
            } else if( numLength - i === 2 ) { ///ខ្ទង់សិប
                const lastString = subStr.substring(1);
                if( firstNumber > 2 )
                    khmer += `${ខ្ទង់សិប[firstNumber].kh}សិប`;
                else
                    khmer += `${ខ្ទង់សិប[firstNumber].kh}`;
            } else if( numLength - i === 1 ) { ///ខ្ទង់រាយ
                khmer += `${khmerNumber[firstNumber].kh}`;
            }
    }

    return khmer;
}

const convertNumber2Text = ( value ) => {
    let khmer = '';
    const valueStr = String( value );
    const numLength =  valueStr.length;

    if( numLength > 7 ) {
        const aboveMillionStr = valueStr.substring(0, numLength - 6);
        khmer += khmerGenerator( aboveMillionStr ) + 'លាន';
    }

    khmer += khmerGenerator( numLength <= 7 ? valueStr : valueStr.substring( numLength - 6 ));

    return khmer;
}

module.exports = convertNumber2Text;