use super::*;

#[derive(Clone, Debug)]
pub struct TailwindSepia {
    percent: NumericValue,
    backdrop: Backdrop,
}
impl Display for TailwindSepia {
    fn fmt(&self, f: &mut Formatter<'_>) -> std::fmt::Result {
        self.backdrop.write(f)?;
        write!(f, "sepia-{}", self.percent)
    }
}

impl TailwindInstance for TailwindSepia {
    fn collision_id(&self) -> String {
        "sepia".into()
    }

    fn get_collisions(&self) -> Vec<String> {
        vec![self.collision_id()]
    }
}

impl TailwindSepia {
    /// <https://tailwindcss.com/docs/sepia>
    pub fn parse(rest: &[&str], arbitrary: &TailwindArbitrary, backdrop: bool) -> Result<Self> {
        let percent = match rest {
            [] if arbitrary.is_none() => 100i32.into(),
            _ => NumericValue::positive_parser("sepia", |_| false)(rest, arbitrary)?,
        };
        Ok(Self {
            percent,
            backdrop: Backdrop::from(backdrop),
        })
    }
}
