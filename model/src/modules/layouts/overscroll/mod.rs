use crate::StandardValue;

use super::*;

#[derive(Clone, Debug)]
pub struct TailwindOverscroll {
    kind: StandardValue,
    axis: AxisXY,
}

impl Display for TailwindOverscroll {
    fn fmt(&self, f: &mut Formatter<'_>) -> std::fmt::Result {
        self.axis.write_xyn(f, "overscroll", &self.kind)
    }
}

impl TailwindInstance for TailwindOverscroll {
    fn collision_id(&self) -> String {
        self.axis.collision_id("overscroll")
    }

    fn get_collisions(&self) -> Vec<&'static str> {
        vec![]
    }
}

impl TailwindOverscroll {
    /// <https://tailwindcss.com/docs/overscroll-behavior>
    pub fn parse(pattern: &[&str], arbitrary: &TailwindArbitrary) -> Result<Self> {
        let (axis, rest) = AxisXY::split_xyn(pattern);
        let kind = StandardValue::parser("overscroll", &Self::check_valid)(rest, arbitrary)?;
        Ok(Self { kind, axis })
    }
    /// https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior#syntax
    pub fn check_valid(mode: &str) -> bool {
        [
            "auto", "contain", "inherit", "initial", "none", "revert", "unset",
        ]
        .contains(&mode)
    }
}
